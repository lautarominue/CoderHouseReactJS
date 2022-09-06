import './App.css';
import NavBar from './components/NavBar';
import Itemcontainer from './components/ItemContainer/ItemContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>Ecommerce</h1>
        <Itemcontainer section="Productos A"/>
        <ItemDetailContainer />

        
      </header>
    </div>
  );
}

export default App;
