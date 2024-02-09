import { ReactNode, createContext } from "react";




export const StateContext = createContext({})

export default function GlobalStateProvider ({children}: {children: ReactNode}) {

    return (
        <StateContext.Provider
            value={{
                
            }}
        >
            {children}
        </StateContext.Provider>
    )
}