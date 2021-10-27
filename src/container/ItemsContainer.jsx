import { Grid } from '@mui/material';
import React from 'react';
import ItemList from '../components/ItemList';

const ItemsContainer = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <ItemList/>
    </Grid>
  );
}
export default ItemsContainer;
