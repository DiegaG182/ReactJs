import {useEffect, useState} from 'react';
import { useParams } from 'react-router';
//import { getProducts } from '../services/GetProducts';
import { getFirestore } from '../services/GetFirestone';
import Item from './Item';
import Loading from './Loading';


const ItemList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
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
        
        /*if(categoryId){
        getProducts
        .then( resp => {        
            console.log('..llamada a api..')
            setProducts(resp.filter(prod => prod.category === categoryId))
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        }else{
            getProducts
            .then( resp => {        
                console.log('..llamada a api..')
                setProducts(resp)
            })    
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } */
    },[categoryId])   
  
    return (
        <>  
            { loading ? <Loading/> : products.map(prod=> <Item key={prod.id} id={prod.id} title={prod.title} picUrl={prod.picUrl} price={prod.price} stock={prod.stock} description={prod.description} />)}
        </>
        )
}
export default ItemList;