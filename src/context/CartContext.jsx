import { createContext, useState, useContext } from "react";



const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [userData, setUserData] = useState({name:"", surname:"", phone:"", email:""});
    
    
    function addToCart(item){
        
        const index = cartList.findIndex(items => items.product.id === item.product.id)
        
        if(index > -1) {
            const oldCant = cartList[index].cantidad  
            const newCant = (item.cantidad + oldCant)

            if (newCant <= item.product.stock) 
            {   cartList.splice(index, 1) 
                setCartList([...cartList, {...item, cantidad: newCant }])} 
            else {alert ("La cantidad Agregada Supera el Stock del producto")}    
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
    function isInCart(item) {
        return cartList.find(items => items.product.id === item.product.id) 
    }

    const handleForm = (e) => {
        setUserData({
            ...userData, [e.target.name]: e.target.value
        })
    }
    
    return (
        
        <CartContext.Provider value ={{
            cartList,   
            showCartList,
            addToCart,
            removeCart,
            removeItem,
            totalCart,
            totalItemsCart,
            userData,
            handleForm
        }} > 
            {children}
        </CartContext.Provider>

            )

}

export default CartContextProvider;
