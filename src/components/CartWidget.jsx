import React from 'react';
import logoImage from '../images/cart.png'

const CartWidget = () =>{

    return(
        <div className="row">
            <div className="logo">
                <img src={logoImage} width="60" height="60" alt="cart" />
            </div>
      </div>
    )

}

export default CartWidget;