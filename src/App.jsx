import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { items } from './Data';



const App = () => {
  const [products, setProducts] = useState(items)
  return (
    <>
      <Router>
        <Navbar setProducts={setProducts} />
        <Routes>
          <Route path='/' element={<Products products={products} />}/>
          <Route path='/:id' element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App