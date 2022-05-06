import React, { useEffect, useState } from 'react';
import '../styles/components/productCard.css';
import PropTypes from 'prop-types';
import { setCart, removeItem } from './Cart';

function ProductCard({ prodData }) {
  const { id, name, price, urlImage } = prodData;
  // console.log('\n\n\n EVERY INFO: ', prodData);
  const [itemQty, setItemQty] = useState(0);

  // const handleInputChange = () => {
  //   console.log('input change detected! - THIS IS PRODUCT PACKAGE', prodPackage);

  const plusOneItem = () => {
    setItemQty(itemQty + 1);
  };

  const minusOneItem = () => {
    if (itemQty === 0) return null;
    if (itemQty === 1) {
      removeItem(id);
    }
    setItemQty(itemQty - 1);
  };

  useEffect(() => {
    if (itemQty < 1) return null;
    setCart({ id, name, price: parseFloat(price), itemQty });
  }, [itemQty]);
  // it won't shut up about dependencies but you can just ignore it

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
        className="cardImage"
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
        // onChange={ handleInputChange }
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

// there's too much logic in this component, I feel. gonna have to separate it into other components later
