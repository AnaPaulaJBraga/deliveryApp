import React, { useState } from 'react';
import '../styles/components/productCard.css';
import PropTypes from 'prop-types';
import { addItem, removeItem } from './Cart';

function ProductCard({ prodData }) {
  const { id, name, price, urlImage } = prodData;
  // console.log('\n\n\n EVERY INFO: ', prodData);
  console.log('URL IMAGE', urlImage);
  const [itemQty, setItemQty] = useState(0);
  const prodPackage = { id, name, price: parseFloat(price), itemQty };

  const addToCart = ({ target }) => {
    addItem(prodPackage);
  };

  const rmvFromCart = ({ target }) => {
    removeItem(prodPackage);
  };

  const handleInputChange = ({ target }) => {

  };

  const plusOneItem = ({ target }) => {
    setItemQty(itemQty + 1);
  };

  const minusOneItem = ({ target }) => {
    if (itemQty < 1) return null;
    setItemQty(itemQty - 1);
  };

  return (
    <div
      className="cardFrame"
    >
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { `R$${price.replace('.', ',')}` }
      </p>

      <img
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />

      <p data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </p>

      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ minusOneItem }
      >
        -
      </button>

      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
        value={ itemQty }
        onChange={ handleInputChange }
      />

      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ plusOneItem }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  prodData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
