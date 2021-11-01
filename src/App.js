//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './container/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './container/ItemDetailContainer';


function App() {

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Switch> 
        <Route exact path="/">
          <ItemListContainer greeting = "Bienvenido a nuestro Carrito, conozca nuestros productos"/>
        </Route>
        <Route exact path="/detalle">
          <ItemDetailContainer />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
