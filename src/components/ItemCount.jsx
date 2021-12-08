import React, { useState } from 'react';
import {ButtonGroup, Button} from '@mui/material/'


const ItemCount = ({inicial,stock,onAdd}) => { 
    const [count, setCount] = useState(inicial);
    

    function handlerOnAdd () {
        onAdd(count)
        setCount(inicial)
    }
    
    //Funcion para decrementar el contador
    function onDecrease(){
        count > inicial && setCount(count - 1) 
    }
    //Funcion para incrementar el contador
    function onIncrease() {
        count < stock && setCount(count + 1) 
    }   

    
    return(
    <div>

         <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={onDecrease} disabled={count<=inicial}  color="info">-</Button>
            <span> {count} </span>
            <Button onClick={onIncrease} disabled={count===stock}  color="info">+</Button>
        </ButtonGroup> 
        <Button onClick={handlerOnAdd} color="primary" variant="contained" hidden={count===0}>Agregar al Carrito</Button>
        
        
    </div>    
    )

}
export default ItemCount;   