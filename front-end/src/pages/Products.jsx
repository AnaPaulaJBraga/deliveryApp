import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import api from '../services/api';
import ProductCard from '../components/ProductCard';

function Products() {
  // const [load, setLoad] = useState(true);
  const [myProds, setProds] = useState([]);

  async function fetchProducts() {
    const response = await api.get('products');
    const allProducts = response.data
      .map((prod) => <ProductCard key={ prod.id } prodData={ prod } />);
    setProds(allProducts);
    // setLoad(false);
    return allProducts;
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // if (load) return <p> LOADING </p>;
  return (
    <div>
      PRODUCTS
      <Navbar pageName="Produtos" />
      <div>
        { myProds }
      </div>
    </div>
  );
}

export default Products;
