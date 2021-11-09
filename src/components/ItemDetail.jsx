import React, { useState } from 'react'
import ItemCount from './ItemCount'
import {Card, CardActions , CardContent , CardMedia ,
        Typography, Grid , Button,  } from '@mui/material';
import { Link } from 'react-router-dom';        
        
export default function ItemDetail(product) {
    const inicial = 1;
    const [count, setCount] = useState(inicial)
    const [cambiarBoton, setCambiarBoton] = useState(false)

    const onAdd=(contador) =>{
        setCount(contador)
    }

    function handlerOnAdd () {
        onAdd(count)
        setCount(inicial)
        setCambiarBoton(true)
        alert(count)
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
                <ItemCount
                     inicial={inicial}
                     stock={product.stock}
                     onAdd={onAdd}
                    />
                <div style={{ marginTop: '.5rem' }}>
                    { cambiarBoton 
                    ? <Link to="/cart"> <Button color="primary" variant="contained">Finalizar Compra</Button> </Link>     
                    : <Button onClick={handlerOnAdd} color="primary" variant="contained">Agregar al Carrito</Button>
                    }    
                </div>    
                </CardActions>
                </CardContent>   
            </Card>
            </Grid>
            
        );      
}