import React, { useState } from 'react'
import ItemCount from './ItemCount'
import {Card, CardActions , CardContent , CardMedia ,
        Typography, Grid , Button} from '@mui/material';
import {useCartContext} from '../context/CartContext'        

export default function ItemDetail(product) {

    const {cartList, showCartList, addToCart} = useCartContext()

    const [cont, setCont] = useState(0)
    const [cambiarBoton, setCambiarBoton] = useState()
    
    const onAdd=(contador) =>{
        setCont(contador)
        addToCart({product, cantidad: contador})
        }
        
        return (
            <Grid item >
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
                <div style={{ marginTop: '.5rem' }}>
                { !cambiarBoton 
                ? <ItemCount inicial={1} stock={product.stock} onAdd={onAdd} />
                : <Button onClick={()=> setCambiarBoton(cambiarBoton)} color="primary" variant="contained">Volver</Button>
                }    
                </div>
                </CardActions>
                </CardContent>   
            </Card>
            </Grid>
            
        );      
}