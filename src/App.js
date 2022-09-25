import './App.css';
import NavBar from './components/NavBar/NavBar';
import Itemcontainer from './components/ItemContainer/ItemContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Checkout from './components/pages/Checkout';
import CartProvider from './components/context/CartContext';


function App() {
  return (
    <CartProvider >
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path="/" element={<Itemcontainer section="Productos A"/>}/>
          <Route path="/contacto" element={<h1>Contacto</h1>}/>
          <Route path="/productos/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Checkout />} />
          <Route path="*" element={<h2>ERROR 404 - pagina no encontrada</h2>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
