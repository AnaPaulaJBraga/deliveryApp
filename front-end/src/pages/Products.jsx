import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import '../styles/pages/products.css';
import { getCart } from '../components/Cart';
import moneyToString from '../utilities/moneyStringConvert';
import getUserData from '../components/LocalUserData';

function Products() {
  const letsNavigate = useNavigate();
  // const [load, setLoad] = useState(true);
  const defaultPrice = 0;
  const [myProds, setProds] = useState([]);
  const [finalPrice, setPrice] = useState(defaultPrice.toFixed(2));

  function handleNavigate() {
    letsNavigate('/customer/checkout');
  }
  function calculatePrice() {
    // console.log('calculating price');
    const DEFAULT_PRICE = 0;
    const myCart = getCart();
    if (myCart.length < 1) return setPrice(DEFAULT_PRICE.toFixed(2));
    const calcPrice = myCart
      .map(({ price, itemQty }) => parseInt(itemQty, 10) * parseFloat(price))
      .reduce((prevVal, currVal) => prevVal + currVal);
    return setPrice(calcPrice.toFixed(2));
  }

  async function fetchProducts() {
    const { token } = getUserData();
    const response = await api
      .get('products', { headers: { Authorization: token } });
    const allProducts = response.data
      .map((prod) => (
        <ProductCard
          key={ prod.id }
          prodData={ prod }
          calcPrice={ () => calculatePrice() }
        />
      ));
    setProds(allProducts);
    // setLoad(false);
    return allProducts;
  }

  function checkoutField() {
    return (
      <footer className="checkoutFooter">
        <button
          data-testid="customer_products__button-cart"
          type="button"
          disabled={ parseInt(finalPrice, 10) === 0 }
          onClick={ handleNavigate }
        >
          Checkout
          <h2 data-testid="customer_products__checkout-bottom-value">
            { moneyToString(finalPrice) }
          </h2>
        </button>
      </footer>
    );
    //  Aqui o link acima deve estar desabilitado caso o carrinho esteja vazio - ou seja, com o preço final 0,00

    // Ele consta como footer mas eu coloquei no topo da pagina pra ficar mais facil de acessar ele durante o desenvolvimento
  }

  useEffect(() => {
    calculatePrice();
    if (myProds.length === 0) fetchProducts();
  }, []);

  // if (load) return <p> LOADING </p>;
  return (
    <main>
      PRODUCTS
      <Navbar pageName="Produtos" />
      <span className="productList">
        { myProds }
        { checkoutField() }
      </span>
    </main>
  );
}

export default Products;
