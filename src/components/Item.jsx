import React from 'react'
import ItemCount from './ItemCount'
import {Card, CardActions , CardContent , CardMedia ,
        Button , Typography, Grid } from '@mui/material';
import Loading from './Loading';
import { Link, useParams } from 'react-router-dom';

export default function Item(product) {
    const handleClick=(contador) =>{
        alert(`La cantidad agregada es ${contador}`)
        }
        

        return (
            <Grid item >
            <Card key={product.key} sx={{ maxWidth: 256 }}>
                <CardMedia 
                component="img"
                alt={product.description}
                height="186"
                image={(product.picUrl)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{product.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{product.description}</Typography>    
                    <ItemCount
                     inicial={1}
                     stock={product.stock}
                     onAdd={handleClick}
                    />
                <CardActions>
                    <Link to={`/detalle/${product.key}`}> 
                        <Button color="secondary" variant="contained" fullWidth="true"> Detalle </Button>
                    </Link>
                </CardActions>
                </CardContent>   
            </Card>
            </Grid>
            
        );      
}
