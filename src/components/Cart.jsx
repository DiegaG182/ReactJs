import {useState} from 'react'
import {useCartContext} from '../context/CartContext'
import { Link } from 'react-router-dom';
import {Card, CardActions , CardContent , CardMedia ,
        Button , Alert, AlertTitle } from '@mui/material';
import {getFirestore} from '../services/GetFirestone';    
import firebase from 'firebase';
import 'firebase/firestore';
import UserForm from './UserForm';

export default function Cart() {
    
    const { cartList, removeItem, removeCart, totalCart , userData  } = useCartContext();
    const [orderId, setOrderId] = useState("");

    const createOrder = (e) => {

        e.preventDefault()

        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = userData;
        order.total = totalCart();
        order.items = cartList.map(itemAdded => {
            console.log(itemAdded);
            const id = itemAdded.product.id;
            const title = itemAdded.product.title;
            const cantidad = itemAdded.cantidad;
            const subtotal = itemAdded.product.price * itemAdded.cantidad;
            return {id, title, cantidad, subtotal}
        })

        const db = getFirestore()
        console.log(order);
        db.collection("orders").add(order)
        .then(resp => setOrderId(resp.id))
        .catch (error => console.log(error) )
        .finally(() => removeCart())

        const updateStock = db.collection("items").where
        (firebase.firestore.FieldPath.documentId(), "in", cartList.map(idToUpdate => idToUpdate.product.id ) ) 
       
        const batch = db.batch();

        updateStock.get()
        .then(response => {
            response.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - cartList.find(idToUpdate => idToUpdate.product.id === docSnapshot.id).cantidad
                })
            })
        
        batch.commit()
        .catch (error => console.log(error) )
        })
    }

    return (
    <>
        <h1>Su Carrito de Compras</h1>
        {cartList.map(
            prod => 
            <li key={prod.product.id} className="text-center"> 

            <Card  sx={{ maxWidth: 250 }}>
                <CardMedia 
                component="img"
                alt={prod.product.description}
                height="60"
                image={(prod.product.picUrl)}
                />
                <CardContent>
                {prod.product.title}
                <div> Precio Un.: $ {prod.product.price} </div>
                <div> Cant: {prod.cantidad} </div>
                <div> Subtotal: {prod.cantidad*prod.product.price} </div>    
                <CardActions>
                    <Button color="secondary" variant="contained" fullWidth="true" onClick={() => removeItem(prod.product.id)} >Eliminar</Button>
                </CardActions>
                </CardContent>   
            </Card>
            </li> )}

            <div variant="primary" hidden={cartList.length > 0 ? false : true} >
                <h5> Total de la Compra: $ {totalCart()} </h5>
            </div>

            <div className="text-center" >
                <Button color="secondary" variant="contained" onClick={() => removeCart()} hidden={cartList.length > 0 ? false : true}> Borrar Carrito</Button>
               
                {orderId!=='' ? <label>El id de su orden es : {orderId}</label> :
                <Alert  hidden={cartList.length > 0 ? true : false} severity="warning" className="text-center ">
                    <AlertTitle>Carrito Vacio</AlertTitle> No hay productos seleccionados...  
                </Alert>
                }

                <Link to='/'>
                        <Button color="secondary" variant="contained">Ir al Inicio</Button>
                </Link>
            </div>
            <UserForm createOrder={createOrder} />
    </>
    
    )
}