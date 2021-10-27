import React from 'react';
import { CardDeck } from 'reactstrap';
import ItemList from '../components/ItemList';

const ItemContainer = () => {
  return (
    <CardDeck>
      <ItemList/>
    </CardDeck>
  );
}
export default ItemContainer;
