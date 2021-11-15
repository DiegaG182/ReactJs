import { createContext, useState, useContext } from "react";


const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    
    function addToCart(item){
        
        const index = cartList.findIndex(items => items.product.id === item.product.id)
        
        if(index > -1) {
            const oldCant = cartList[index].cantidad  
            cartList.splice(index, 1)

            setCartList([...cartList, {...item, cantidad: (item.cantidad + oldCant) }])   
        }else{setCartList([ ... cartList, item])}
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
    function totalCart() {   
        return cartList.reduce((acum,prod) => acum + (prod.cantidad * prod.product.price),0)        
    } 
    function totalItemsCart() {   
        return cartList.reduce((acum,prod) => acum + prod.cantidad ,0)        
    } 
    
    return (
        
        <CartContext.Provider value ={{
            cartList,   
            showCartList,
            addToCart,
            removeCart,
            removeItem,
            totalCart,
            totalItemsCart
        }} >
            {children}
        </CartContext.Provider>

            )

}

export default CartContextProvider;