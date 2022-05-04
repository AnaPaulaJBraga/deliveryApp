import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import api from '../services/api';
import ProductCard from '../components/ProductCard';

function Products() {
  // function makeProdCards(products) {
  // }
  // const [load, setLoad] = useState(true);
  const [myProds, setProds] = useState([]);
  async function fetchProducts() {
    const response = await api.get('products');
    const allProducts = response.data
      .map((prod) => {
        delete Object.assign(prod, { urlImage: prod.url_image }).url_image;
        // have to rename url_image to urlImage
        // https://bobbyhadz.com/blog/javascript-rename-object-key#:~:text=To%20rename%20the%20key%20of,key%20with%20the%20new%20name.

        return <ProductCard key={ prod.id } prodData={ prod } />;
      });

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
      <Navbar />
      <div>
        { myProds }
      </div>
    </div>
  );
}

export default Products;
