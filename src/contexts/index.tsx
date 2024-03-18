import { ReactNode, createContext, useRef, useState } from "react";
import { auth } from "../hooks/useAuth";
import type {User} from 'firebase/auth'
import { useCartStore } from "./reducers/useCartStore";
import { getAllCartItems } from "./reducers/actions/cartActions";
import { ProductInCartTypes } from "@/sanity/schemaTypes/product";
import useLocalStorage from "../hooks/useLocalstorage";



type ContextProps = {
    user: User | null;
    subscriptionRef?: any
}

export const StateContext = createContext({} as ContextProps)

export default function GlobalStateProvider ({children}: {children: ReactNode}) {

    const [user, setUser] = useState<User | null>(auth.currentUser)
    const subscriptionRef = useRef()
    auth.onAuthStateChanged( async (res) => {

        if (!res?.uid) useCartStore.setState({ cart: [] });
        if (res?.uid) {
            const cartFromDb = await getAllCartItems()
            useCartStore.setState({ cart: cartFromDb?.data as ProductInCartTypes[]});
        }
        setUser(res)
    })
    // 
    

    return (
        <StateContext.Provider
            value={{
                user, subscriptionRef
            }}
        >
            {children}
        </StateContext.Provider>
    )
}