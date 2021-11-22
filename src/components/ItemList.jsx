
import Item from './Item';



const ItemList = ({productsList}) => {

    return (
        <>  
          {productsList.map( prod => <Item key={prod.id} id={prod.id} title={prod.title} picUrl={prod.picUrl} price={prod.price} stock={prod.stock} description={prod.description} />)};
        </>
        )
}
export default ItemList;