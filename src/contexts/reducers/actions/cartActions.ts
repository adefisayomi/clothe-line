import { ProductInCartTypes } from '@/sanity/schemaTypes/product';
import { errorMessage } from '@/src/constants';
import { auth } from '@/src/hooks/useAuth';
import { db } from '@/src/hooks/useDb';
import {collection, doc, getDoc, setDoc, updateDoc} from 'firebase/firestore'


const cartCollection = collection(db, "carts")


// 
export const addCartItem = async (cartItems: ProductInCartTypes[]) => {
    try {
        if (auth && auth.currentUser && auth.currentUser.uid) {
            const userDocRef = doc(cartCollection, auth.currentUser.uid);
            await setDoc(userDocRef, { items: [...cartItems] }, { merge: true });
            return ({
                success: true,
                message: 'item added succesfully',
                data: null
            })
        }
        throw new Error('invalid user!')
    }
    catch(err: any) {
        return errorMessage(err.message)
    }
};

export const deleteAllCartItems = async () => {
    try {
      if (auth && auth.currentUser && auth.currentUser.uid) {
        const userDocRef = doc(cartCollection, auth.currentUser.uid);
        await updateDoc(userDocRef, { items: [] });
        return {
            success: true,
            message: 'cart emptied',
            data: null,
        };
      } 
      throw new Error('Invalid user!')
    } catch (err: any) {
        return errorMessage(err.message);
    }
  };

export const getAllCartItems = async (): Promise<{ success: boolean; message: string; data: ProductInCartTypes[] | null }> => {
    try {
      if (auth && auth.currentUser && auth.currentUser.uid) {
        const userDocRef = doc(cartCollection, auth.currentUser.uid);
        const userDoc = await getDoc(userDocRef);
  
        if (userDoc.exists()) {
          const cartData = userDoc.data();
          const cartItems = cartData?.items || [];
          return {
            success: true,
            message: 'Cart items fetched successfully',
            data: cartItems as ProductInCartTypes[],
          };
        } else {
          return {
            success: true,
            message: 'User has no cart items',
            data: [],
          };
        }
      } else {
        throw new Error('Invalid user!');
      }
    } catch (err: any) {
      return {
        success: false,
        message: 'Error fetching cart items',
        data: null,
      };
    }
  };