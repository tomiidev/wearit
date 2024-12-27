
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import './App.css';
import Home from './components/home';
import ProductId from './components/id';
import Products from './components/products';
import Cart from './components/cart';
import Checkout from './components/checkout';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<ProductId />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/cart/checkout" element={<Checkout />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
