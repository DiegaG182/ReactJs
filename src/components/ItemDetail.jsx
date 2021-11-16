import React, { useState } from 'react'
import ItemCount from './ItemCount'
import {Card, CardActions , CardContent , CardMedia ,
        Typography, Grid , Button} from '@mui/material';
import {useCartContext} from '../context/CartContext'        
import { Link } from 'react-router-dom';

export default function ItemDetail(product) {

    const {cartList, showCartList, addToCart} = useCartContext()

    const [count, setCount] = useState(0)
    const [finalizarBoton, setFinalizarBoton] = useState(false)
    const initial = 1;

    function handlerOnAdd () {
        onAdd(count)
        setCount(initial)
        setFinalizarBoton(true)
    }
    const onAdd=(contador) =>{
        setCount(contador)
        addToCart({product, cantidad: contador})
        }
        
        return (
            <Grid  >
            <Card key={product.id} sx={{ maxWidth:"480" }}>
                <CardMedia 
                component="img"
                alt={product.description}
                height="300"
                image={(product.picUrl)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{product.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{product.description}</Typography>    
                    
                <CardActions>
                <ItemCount inicial={1} stock={product.stock} onAdd={onAdd} />
                <Button onClick={handlerOnAdd} color="primary" variant="contained">Agregar al Carrito</Button>
                
                    { finalizarBoton 
                    && <Link to="/cart"> <Button color="primary" variant="contained">Finalizar Compra</Button> </Link>  
                    }    
                </CardActions>
                </CardContent>   
            </Card>
            </Grid>
            
        );      
}