import React from 'react';
import '../styles/components/productCard.css';

function ProductCard({ prodData }) {
  const { name, price, urlImage } = prodData;
  console.log('\n\n\n EVERY INFO: ', prodData);
  return (
    <div className="cardFrame">
      THIS IS A PRODUCT
      <img src={ urlImage }/>
      <p>{ name }</p>
      <p>{ price }</p>
    </div>
  );
}

export default ProductCard;
