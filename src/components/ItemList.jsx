import {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { getProducts } from '../services/GetProducts';
import Item from './Item';
import Loading from './Loading';


const ItemList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {

        if(categoryId){
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
        }
    },[categoryId])   
  
    return (
        <>  
            { loading ? <Loading/> : products.map(prod=> <Item key={prod.id} id={prod.id} title={prod.title} picUrl={prod.picUrl} price={prod.price} stock={prod.stock} description={prod.description} />)}
        </>
        )
}
export default ItemList;