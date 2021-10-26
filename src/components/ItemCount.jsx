import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';



const ItemCount = ({inicial,stock,onAdd}) => { 
    const [count, setCount] = useState(1);
    //Funcion para decrementar el contador
    function onDecrease(){
        count > inicial ? setCount(count - 1) : console.log("no se puede restar esta cantidad")    
    }
    //Funcion para incrementar el contador
    function onIncrease() {
        count < stock ? setCount(count + 1) : console.log("no se puede sumar esta cantidad")
    }   
    
    
    return(
    <div>
        <ButtonGroup>
            <Button onClick={onDecrease} disabled={count<=inicial}  color="info">-</Button>
            <span> {count} </span>
            <Button onClick={onIncrease} disabled={count===stock}  color="info">+</Button>
        </ButtonGroup> 
        
        <div style={{ marginTop: '.5rem' }}>
        <Button onClick={()=>onAdd(count)} color="primary">Agregar al Carrito</Button>
        </div>
    </div>    
    )

}
export default ItemCount;   