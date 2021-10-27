import ItemContainer from "./ItemContainer";

const ItemListContainer = ({greeting}) =>{
        
    return(
    <>
        <p>{greeting}</p>
        <div className="container">
        <ItemContainer />
        </div>
    </>    
    )
}
export default ItemListContainer;