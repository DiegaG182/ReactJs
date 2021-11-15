//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './container/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ItemDetailContainer from './container/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart'


function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Switch> 
            <Route exact path="/">
              <ItemListContainer greeting = "Bienvenido a nuestro Carrito, conozca nuestros productos"/>
            </Route>
            <Route exact path="/product/:productId" component={ItemDetailContainer} />
            <Route exact path="/category/:categoryId" component={ItemListContainer} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
