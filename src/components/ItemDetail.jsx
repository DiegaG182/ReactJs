import React, { useState } from 'react'
import ItemCount from './ItemCount'
import {Card, CardActions , CardContent , CardMedia ,
        Typography, Grid } from '@mui/material';
        
export default function ItemDetail(product) {

    const [count, setCont] = useState(0)
    
    const onAdd=(contador) =>{
        setCont(contador)
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
                     inicial={1}
                     stock={product.stock}
                     onAdd={onAdd}
                    />
                </CardActions>
                </CardContent>   
            </Card>
            </Grid>
            
        );      
}