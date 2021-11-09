import React, { useState } from 'react';
import {ButtonGroup, Button} from '@mui/material/'


const ItemCount = ({inicial,stock,onAdd}) => { 
    const [count, setCount] = useState(inicial);
    
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
         <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={onDecrease} disabled={count<=inicial}  color="info">-</Button>
            <span> {count} </span>
            <Button onClick={onIncrease} disabled={count===stock}  color="info">+</Button>
        </ButtonGroup> 
    </div>    
    )

}
export default ItemCount;   