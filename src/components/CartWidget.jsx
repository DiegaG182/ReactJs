import React from 'react';
import logoImage from '../images/cart.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton'

const CartWidget = () =>{

    return(
        <div className="row">
            <div className="logo">
                <IconButton aria-label="cart button" >
                  <ShoppingCartOutlinedIcon/>
                </IconButton>
            </div>
      </div>
    )

} 

export default CartWidget; 