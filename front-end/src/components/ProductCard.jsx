import React from 'react';
import '../styles/components/productCard.css';
import PropTypes from 'prop-types';

function ProductCard({ prodData }) {
  const { id, name, price, urlImage } = prodData;
  console.log('\n\n\n EVERY INFO: ', prodData);

  return (
    <div
      className="cardFrame"
      // data-testid={ `customer_products__element-card-title-${name}` }
    >
      <img
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </p>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { price }
      </p>

      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        REMOVER
      </button>

      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
        // pattern="[0-9]*"
      />

      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        ADICIONAR
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

// Note: a urlImage está funcionando, mas fica dificil de testar porque a url vem como localhost:3001, mas o <npm start> local roda geralmente em 3002
