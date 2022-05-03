import React from 'react';

function ProductCard({ prodData }) {
  const { name, price, urlImage } = prodData;
  console.log('\n\n\n NAME: ', name);
  return (
    <span>
      THIS IS A PRODUCT
      <p>{ name }</p>
      <p>{ price }</p>
    </span>
  );
}

export default ProductCard;
