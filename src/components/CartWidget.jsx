import React from 'react';
import logoImage from '../images/cart.png'

const ItemListContainer = ({greeting}) =>{
    return(
        <p>{greeting}</p>
    )
}

const CartWidget = () =>{

    return(
        <div className="row">
            <div className="logo">
                <img src={logoImage} width="60" height="60" alt="cart" />
                <ItemListContainer greeting="4"/>
            </div>
      </div>
    )

}

export default CartWidget;