import React from 'react'
import {Card, CardActions , CardContent , CardMedia ,
        Button , Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Item(product) {
  
        return (
            <Grid item >
            <Card key={product.id} sx={{ maxWidth: 256 }}>
                <CardMedia 
                component="img"
                alt={product.description}
                height="186"
                image={(product.picUrl)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{product.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{product.description}</Typography>    
                    
                <CardActions>
                    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}> 
                        <Button color="secondary" variant="contained" fullWidth="true"> Detalle </Button>
                    </Link>
                </CardActions>
                </CardContent>   
            </Card>
            </Grid>
            
        );      
}
