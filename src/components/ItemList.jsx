import {useEffect, useState} from 'react';
import { getProducts } from '../services/getProducts';
import Item from './Item';
import Loading from './Loading';


const ItemList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts
        .then( resp => {        
            console.log('..llamada a api..')
            setProducts(resp)
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])   
  
    return (
        <>  
            { loading ? <Loading/> : products.map(prod=> <Item key={prod.id} title={prod.title} picUrl={prod.picUrl} price={prod.price} stock={prod.stock} description={prod.description} />)}
        </>
        )
}
export default ItemList;