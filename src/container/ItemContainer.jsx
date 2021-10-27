import { Grid } from '@mui/material';
import React from 'react';
import ItemList from '../components/ItemList';

const ItemContainer = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <ItemList/>
    </Grid>
  );
}
export default ItemContainer;
