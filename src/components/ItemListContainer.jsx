import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) =>{

    const handleClick=(contador) =>{
        alert(`La cantidad agregada es ${contador}`)
        }
        
    return(
    <>
        <p>{greeting}</p>
        <ItemCount
        inicial={1}
        stock={5}
        onAdd={handleClick}
        />
    </>    
    )
}
export default ItemListContainer;