import React from 'react';
import '../styles/components/productCard.css';
import PropTypes from 'prop-types';

function ProductCard({ prodData }) {
  const { name, price, urlImage } = prodData;
  // console.log('\n\n\n EVERY INFO: ', prodData);
  return (
    <div className="cardFrame">
      THIS IS A PRODUCT
      <img src={ urlImage } alt={ name } />
      <p>{ name }</p>
      <p>{ price }</p>
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

// Note: a urlImage está funcionando, mas fica dificil de testar porque a url vem como localhost:3001, mas o npm start local roda geralmente em 3002
