// import React from 'react';

export const getCart = () => {
  const myCart = localStorage.getItem('cartData');
  // const newWay = localStorage.userData();
  console.log('\n\n\n current Cart:', myCart);
  return myCart;
};

export const setCart = (item) => {
  const myCart = getCart();
  const newCart = [...myCart, item];
  JSON.stringify(localStorage.setItem('cartData', newCart));
  // alert('ADD ITEM LOGIC HERE');
};

export const removeItem = ({ id }) => {
  const myCart = getCart();
  const itemRemoved = myCart.filter((item) => item.id !== id);
  JSON.stringify(localStorage.setItem('cartData', itemRemoved));
  console.log('\n\n Removing the item: ', id, '\n newCart: ', itemRemoved);
  // alert('REMOVE ITEM LOGIC HERE');
};

// cartData from storage is an array
