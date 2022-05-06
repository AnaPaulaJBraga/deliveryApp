import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import '../styles/pages/products.css';
import { getCart } from '../components/Cart';

function Products() {
  // const [load, setLoad] = useState(true);
  const [myProds, setProds] = useState([]);
  const [finalPrice, setPrice] = useState('0,00');

  async function fetchProducts() {
    const response = await api.get('products');
    const allProducts = response.data
      .map((prod) => <ProductCard key={ prod.id } prodData={ prod } />);
    setProds(allProducts);
    // setLoad(false);
    return allProducts;
  }

  function calculatePrice() {
    const myCart = getCart();
    if (myCart.length < 1) return 0;
    const calcPrice = myCart
      .map(({ price, itemQty }) => parseInt(itemQty, 10) * parseFloat(price))
      .reduce((prevVal, currVal) => prevVal + currVal);
    return setPrice(calcPrice.toFixed(2));
  }

  function checkoutField() {
    return (
      <footer>
        <button
          type="button"
          data-testid="customer_products__button-cart"
        >
          <Link to="/checkout">CHECKOUT</Link>
        </button>
        <p data-testid="customer_products__checkout-bottom-value">
          R$
          { finalPrice }
        </p>
      </footer>
    );
    // Ele consta como footer mas eu coloquei no topo da pagina pra ficar mais facil de acessar ele durante o desenvolvimento
  }

  useEffect(() => {
    fetchProducts();
    calculatePrice();
  }, []);

  // if (load) return <p> LOADING </p>;
  return (
    <div>
      PRODUCTS
      <Navbar pageName="Produtos" />
      { checkoutField() }
      <span className='="productList'>
        { myProds }
      </span>
    </div>
  );
}

export default Products;
