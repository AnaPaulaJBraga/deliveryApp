import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminManager from './pages/AdminManager';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

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
        <Route exact path="/admin/manage" element={ <AdminManager /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
