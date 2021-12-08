import React, { useState } from 'react'
import ItemCount from './ItemCount'
import {Card, CardActions , CardContent , CardMedia ,
        Typography, Grid , Button} from '@mui/material';
import {useCartContext} from '../context/CartContext'        
import { Link } from 'react-router-dom';

export default function ItemDetail(product) {

    const {addToCart} = useCartContext()
    const initial = 0;
    const [count, setCount] = useState(initial)
    const [finalizarBoton, setFinalizarBoton] = useState(false)
    

    
    const onAdd=(contador) =>{
        setCount(contador)
        addToCart({product, cantidad: contador})
        setFinalizarBoton(true)
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
                { finalizarBoton 
                ? <Link to="/cart"> <Button color="primary" variant="contained">Finalizar Compra</Button> </Link>  
                : <ItemCount inicial={initial} stock={product.stock} onAdd={onAdd} />
                }    
                </CardActions>
                </CardContent>   
            </Card>
            </Grid>
            
        );      
}