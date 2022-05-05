import React from "react";

export const getCart = () => {
  const { myCart } = localStorage.getItem('cartData');
  // const newWay = localStorage.userData();
  console.log('\n\n\n current Cart:', myCart);
  return myCart;
};

export const addItem = (item) => {
  const myCart = getCart();
  const newCart = [...myCart, item];
  JSON.stringfy(localStorage.setItem('cartData', newCart));
  // alert('ADD ITEM LOGIC HERE');
};

export const removeItem = (item) => {
  // alert('REMOVE ITEM LOGIC HERE');
};

// cartData from storage is an array
