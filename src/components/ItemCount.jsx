import React, { useState } from 'react';
import {ButtonGroup, Button} from '@mui/material/'
import { Link } from 'react-router-dom';

const ItemCount = ({inicial,stock,onAdd}) => { 
    const [count, setCount] = useState(inicial);
    const [cambiarBoton, setCambiarBoton] = useState(false)

    
    //Funcion para decrementar el contador
    function onDecrease(){
        count > inicial ? setCount(count - 1) : console.log("no se puede restar esta cantidad")    
    }
    //Funcion para incrementar el contador
    function onIncrease() {
        count < stock ? setCount(count + 1) : console.log("no se puede sumar esta cantidad")
    }   
    
    function handlerOnAdd () {
        onAdd(count)
        setCount(inicial)
        setCambiarBoton(true)
    }
    
    return(
    <div>

         <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={onDecrease} disabled={count<=inicial}  color="info">-</Button>
            <span> {count} </span>
            <Button onClick={onIncrease} disabled={count===stock}  color="info">+</Button>
        </ButtonGroup> 
        
        <div style={{ marginTop: '.5rem' }}>
        { cambiarBoton 
        ? <Link to="/cart"> <Button color="primary" variant="contained">Finalizar Compra</Button> </Link>     
        : <Button onClick={handlerOnAdd} color="primary" variant="contained">Agregar al Carrito</Button>
        }    
        </div>
    </div>    
    )

}
export default ItemCount;   