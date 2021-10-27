//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './container/ItemListContainer';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting = "Bienvenido"/>
    </div>
  );
}

export default App;
