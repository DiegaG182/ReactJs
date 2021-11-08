import { createContext } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    return (
        <CartContext.Provider value ={[]} />
            {children}
        )
}