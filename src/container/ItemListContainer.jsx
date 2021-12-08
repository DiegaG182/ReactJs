import ItemList from "../components/ItemList";
import {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '../services/GetFirestone';
import Loading from '../components/Loading';
import { Grid } from '@mui/material';


const ItemListContainer = ({greeting}) =>{
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    

    useEffect(() => {

         const db = getFirestore();
        
        if(categoryId){ 
            const dbQuery = db.collection('items').where('category','==', categoryId).get();   
            dbQuery
            .then(
                resp => setProducts( resp.docs.map( prod => ( { id: prod.id, ...prod.data() } ) ) )            
            ).catch(err => console.log(err))
             .finally(()=> setLoading(false))
        }else{
            const dbQuery = db.collection('items').get();   
            dbQuery
            .then(
                resp => setProducts( resp.docs.map( prod => ( { id: prod.id, ...prod.data() } ) ) )            
            ).catch(err => console.log(err))
             .finally(()=> setLoading(false))
        }    
    },[categoryId])   
      
    return(
    <>
        <h2>{greeting}</h2>
        <div className="container">
        {loading ? <Loading/> : <Grid container spacing={2} justifyContent="center" alignItems="center">
                                <ItemList productsList = {products} /></Grid>}
        </div>
    </>    
    )
}
export default ItemListContainer;