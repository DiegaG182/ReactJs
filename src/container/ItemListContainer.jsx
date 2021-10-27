import ItemsContainer from "./ItemsContainer";

const ItemListContainer = ({greeting}) =>{
        
    return(
    <>
        <p>{greeting}</p>
        <div className="container">
        <ItemsContainer />
        </div>
    </>    
    )
}
export default ItemListContainer;