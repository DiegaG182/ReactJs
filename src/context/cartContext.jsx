import { createContext, useState, useContext } from "react";


const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    
    function addToCart({item}){
        
        const existe = cartList.find(items => items.product.id === item.product.id) 
        
        if(existe) {
            item.cantidad += existe.cantidad  
            removeItem(existe.product.id)   
        }
        
        setCartList([ ... cartList, item])
    }
    function showCartList () {
        console.log(cartList)
    }
    function removeItem (idItemRemove)  {
        setCartList( cartList.filter(items => items.product.id !== idItemRemove))
    }
    function removeCart () {
        setCartList([])
    }
    /* function isInCart(item) {
        return  
        
    } */
    
    return (
        
        <CartContext.Provider value ={{
            cartList,   
            showCartList,
            addToCart,
            removeCart,
            removeItem
        }} >
            {children}
        </CartContext.Provider>

            )

}

export default CartContextProvider;