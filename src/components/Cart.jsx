import React from 'react'
import {useCartContext} from '../context/CartContext'
import { Link } from 'react-router-dom';
import {Card, CardActions , CardContent , CardMedia ,
    Button , Grid , Alert, AlertTitle } from '@mui/material';

export default function Cart() {
    
    const { cartList, removeItem, removeCart, totalCart } = useCartContext();

    console.log("cartList de carrito",cartList)

    return (
    <>
        <h1>Su Carrito de Compras</h1>
        {cartList.map(
            prod => 
            <li key={prod.product.id} className="text-center"> 

            <Card  sx={{ maxWidth: 250 }}>
                <CardMedia 
                component="img"
                alt={prod.product.description}
                height="60"
                image={(prod.product.picUrl)}
                />
                <CardContent>
                {prod.product.title}
                <div> Precio Un.: $ {prod.product.price} </div>
                <div> Cant: {prod.cantidad} </div>
                <div> Subtotal: {prod.cantidad*prod.product.price} </div>    
                <CardActions>
                    <Button color="secondary" variant="contained" fullWidth="true" onClick={() => removeItem(prod.product.id)} >Eliminar</Button>
                </CardActions>
                </CardContent>   
            </Card>
            </li> )}

            <div variant="primary" hidden={cartList.length > 0 ? false : true} >
                <h5> Total de la Compra: $ {totalCart()} </h5>
            </div>

            <div className="text-center" >
                <Button color="secondary" variant="contained" onClick={() => removeCart()} hidden={cartList.length > 0 ? false : true}> Borrar Carrito</Button>
               
                <Alert  hidden={cartList.length > 0 ? true : false} severity="warning" className="text-center ">
                    <AlertTitle>Carrito Vacio</AlertTitle> No hay productos seleccionados...  
                </Alert>
  

                <Link to='/'>
                        <Button color="secondary" variant="contained">Ir al Inicio</Button>
                </Link>
            </div>
    </>
    
    )
}