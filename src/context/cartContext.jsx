import { createContext, useState, useContext } from "react";


const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    function addToCart({item}){
        setCartList([ ... cartList, item])
    }

    return (
        
        <CartContext.Provider value ={[]} >
            {children}
        </CartContext.Provider>

            )

}

export default CartContextProvider;