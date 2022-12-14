import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/shop' exact element={<Shop />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
