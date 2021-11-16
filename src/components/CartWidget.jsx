import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom';
import {useCartContext} from '../context/CartContext'


const CartWidget = () =>{
  const { totalItemsCart, cartList } = useCartContext();
    return(
        <div className="row">
            <div hidden={cartList.length > 0 ? false : true}>
            <Link to='/cart'>
                <IconButton aria-label="cart button" >
                  <ShoppingCartOutlinedIcon/>
                </IconButton>
            </Link>
            {totalItemsCart()}
            </div>
            
      </div>
    )

} 

export default CartWidget; 