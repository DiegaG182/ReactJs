import ItemsContainer from "./ItemsContainer";

const ItemListContainer = ({greeting}) =>{
        
    return(
    <>
        <h2>{greeting}</h2>
        <div className="container">
        <ItemsContainer />
        </div>
    </>    
    )
}
export default ItemListContainer;