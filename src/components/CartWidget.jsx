import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton'

const CartWidget = () =>{

    return(
        <div className="row">
            <div>
                <IconButton aria-label="cart button" >
                  <ShoppingCartOutlinedIcon/>
                </IconButton>
            </div>
      </div>
    )

} 

export default CartWidget; 