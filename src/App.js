import './App.css';
import NavBar from './components/NavBar';
import Itemcontainer from './components/ItemContainer/ItemContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>Ecommerce</h1>
        <Itemcontainer section="Productos A"/>
        
      </header>
    </div>
  );
}

export default App;
