
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import './App.css';
import Home from './components/home';

import Checkout from './components/checkout';
import Shop from './components/shop';
import ProductIDV2 from './components/product_id_v2';
import CartTest from './components/cart_test';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
     
          <Route exact path="/shop/:category/:subcategory" element={<Shop />} />
          <Route exact path="/shop/:category" element={<Shop />} />
          <Route exact path="/shop/:category/:subCategory/:productTitle"  element={<ProductIDV2 />} />
          <Route exact path="/cart" element={<CartTest />} />
          <Route exact path="/cart/checkout" element={<Checkout />} />
      {/*     <Route path="/buscar" element={<SearchResults />} /> */}
        </Routes>
      </Router>


    </div>
  );
}

export default App;
