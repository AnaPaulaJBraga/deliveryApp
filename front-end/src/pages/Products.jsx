import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import '../styles/pages/products.css';
import { getCart } from '../components/Cart';
import moneyToString from '../utilities/moneyStringConvert';

function Products() {
  // const [load, setLoad] = useState(true);
  const defaultPrice = 0;
  const [myProds, setProds] = useState([]);
  const [finalPrice, setPrice] = useState(defaultPrice.toFixed(2));

  function calculatePrice() {
    console.log('calculating price');
    const DEFAULT_PRICE = 0;
    const myCart = getCart();
    if (myCart.length < 1) return setPrice(DEFAULT_PRICE.toFixed(2));
    const calcPrice = myCart
      .map(({ price, itemQty }) => parseInt(itemQty, 10) * parseFloat(price))
      .reduce((prevVal, currVal) => prevVal + currVal);
    return setPrice(calcPrice.toFixed(2));
  }

  async function fetchProducts() {
    const response = await api.get('products');
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
  // SHUT UP LINT

  function checkoutField() {
    return (
      <footer className="checkoutFooter">
        <Link to="/customer/checkout">
          <button
            // data-testid="customer_products__button-cart"
            data-testid="customer_products__button-cart"
            type="button"
            disabled={ parseInt(finalPrice, 10) === 0 }
          >
            Checkout~
            <h2 data-testid="customer_products__checkout-bottom-value">
              { moneyToString(finalPrice) }
            </h2>
          </button>
        </Link>
      </footer>
    );
    //  Aqui o link acima deve estar desabilitado caso o carrinho esteja vazio - ou seja, com o preço final 0,00

    // Ele consta como footer mas eu coloquei no topo da pagina pra ficar mais facil de acessar ele durante o desenvolvimento
  }

  useEffect(() => {
    fetchProducts();
    calculatePrice();
  }, [fetchProducts]);

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
