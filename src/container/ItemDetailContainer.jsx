import {useEffect, useState} from 'react';
import { getFirestore } from '../services/GetFirestone';
import ItemDetail from "../components/ItemDetail";
import { Grid } from '@mui/material';
import Loading from '../components/Loading';
import { useParams } from 'react-router';

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(() => {

        const db = getFirestore();
        const dbQuery = db.collection('items').doc(productId).get();   
            dbQuery
            .then( 
                resp => setProduct( { id: resp.id, ...resp.data() } )          
            ).catch(err => console.log(err))
             .finally(()=> setLoading(false))
    },[productId])   
    
    
    return(
    <Grid container spacing={2} justifyContent="center" alignItems="center" >
        { loading ? <Loading/> : <ItemDetail key={product.id}  id={product.id} title={product.title} picUrl={product.picUrl} price={product.price} stock={product.stock} description={product.description} />  }
    </Grid> 
    )
}
export default ItemDetailContainer;