import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import SalesOrder from './pages/SalesOrder';
import SalesDetails from './pages/SalesDetails';
import Checkout from './pages/Checkout';

// teste
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/products/" element={ <Navigate to="/customer/products" /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/seller/orders" element={ <SalesOrder /> } />
        <Route path="/seller/orders/:id" element={ <SalesDetails /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
