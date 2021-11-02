//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './container/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ItemDetailContainer from './container/ItemDetailContainer';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch> 
        <Route exact path="/">
          <ItemListContainer greeting = "Bienvenido a nuestro Carrito, conozca nuestros productos"/>
        </Route>
        <Route exact path="/product/:productId" component={ItemDetailContainer} />
        <Route exact path="/category/:categoryId" component={ItemListContainer} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
