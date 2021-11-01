import {useEffect, useState} from 'react';
import { getProduct } from '../services/GetProduct';
import ItemDetail from "../components/ItemDetail";
import { Grid } from '@mui/material';
import Loading from '../components/Loading';

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProduct
        .then( resp => {        
            console.log(resp[0])
            setProduct(resp[0])
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])  
    
    
    return(
    <Grid container spacing={2} justifyContent="center" alignItems="center">
        { loading ? <Loading/> : <ItemDetail key={product.id} title={product.title} picUrl={product.picUrl} price={product.price} stock={product.stock} description={product.description} />  }
    </Grid> 
    )
}
export default ItemDetailContainer;