import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import { get, set, del } from 'idb-keyval';
import {addCartItem, deleteAllCartItems, getAllCartItems} from './actions/cartActions'
import { errorMessage } from '@/src/constants';
import { auth } from '@/src/hooks/useAuth';
import { ProductInCartTypes } from '@/sanity/schemaTypes/product';
import deepMerge from 'deepmerge'


const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};


export const useCartStore = create(
  persist(
    (set: any, get: any) => ({
      cart: [] as ProductInCartTypes[],
      addCartItem: async (cartItem: ProductInCartTypes, setAlert: any) => {
        try {
          const newCart = [...get().cart, cartItem]
          const res = await addCartItem(newCart)
          if (!res.success) throw new Error(res.message)
          // // 
          setAlert(`${cartItem.quantity} pieces of ${cartItem.name} was successfuly added to cart.`)
          return set({ cart: [...newCart] });
        } 
        catch (err: any) {
          setAlert(err.message, 'error')
          return errorMessage(err.message)
        }
      },
      emptyCart: async (setAlert: any) => {
        try {
          const res = await deleteAllCartItems()
          if (!res.success) throw new Error(res.message)
          
          setAlert(res.message, 'success')
          return set({ cart: [] });
        } 
        catch (err: any) {
          setAlert(err.message, 'error');
          return errorMessage(err.message);
        }
      },
      resetCart: async () => {
        try {
          return set({ cart: [] });
        } 
        catch (err: any) {
          return errorMessage(err.message);
        }
      },
      updateCartItem: async (updatedCartItem: ProductInCartTypes, setAlert: any) => {
        try {
          const newCart = get().cart.map((item: ProductInCartTypes) =>
            item._id === updatedCartItem._id ? { ...item, ...updatedCartItem } : item
          )
          const res = await addCartItem(newCart)
          if (!res.success) throw new Error(res.message)
          //
          setAlert(`item successfully updated.`, 'success');
          return set({cart: [...newCart]});
        }
        catch (err: any) {
          setAlert(err.message, 'error');
          return errorMessage(err.message);
        }
      },
      deleteCartItem: async (index: number, setAlert: any) => {
        try {
          const currentItems = [...get().cart]
          currentItems.splice(index, 1)

          const res = await addCartItem(currentItems)
          if (!res.success) throw new Error(res.message)
          //
          setAlert(`item successfully removed from the cart.`, 'success');
          return set({ cart: [...currentItems]});
        } 
        catch (err: any) {
          setAlert(err.message, 'error');
          errorMessage(err.message);
        }
      },
      loadCartFromDb: async () => {
        try {
          const res = await getAllCartItems()
          if (!res.success) throw new Error(res.message)
          return set({ cart: res.data && res.data ? [...res.data] : [] });
        } 
        catch (err: any) {
          errorMessage(err.message);
        }
      },
    }),
    {
      name: 'cart-storage',
      storage: auth && auth.currentUser ? createJSONStorage(() => storage) : undefined,
      onRehydrateStorage(state) {
        if (auth && auth.currentUser && auth.currentUser.uid) {
          useCartStore.getState().loadCartFromDb();
        }
        else {
          useCartStore.setState({cart: []})
        }
      },
      merge: (currentState: any, persistedState: any) => (
        deepMerge(currentState, persistedState)
      )
    },
  ),
);


useCartStore.getInitialState().loadCartFromDb()
useCartStore.getState().loadCartFromDb();
