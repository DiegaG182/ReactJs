import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';



const ItemCount = ({ini,fin}) => {
    const [count, setCount] = useState(1)
    const [inicial, setInicial] = useState(ini)
    const [stock, settock] = useState(fin)

    function onAdd(e) {
        const action = e.target.textContent
        if (action === "+" && count < stock ) 
            setCount(count + 1)
        if (action === "-" && count > inicial )
            setCount(count - 1); 
    } 
    
    return(
    <div>
        <ButtonGroup>
            <Button onClick={(e)=>onAdd(e)}>-</Button>
            <span> {count} </span>
            <Button onClick={(e)=>onAdd(e)}>+</Button>
        </ButtonGroup> 
    </div>    
    )

}
export default ItemCount;   