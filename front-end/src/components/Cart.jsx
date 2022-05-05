import React from "react";

export const getCart = () => {
  const { myCart } = localStorage.getItem('userData');
  console.log('\n\n\n\n\nold and regular function', myCart);

  // const newWay = localStorage.userData();
  // console.log('\n new way?????:', newWay);
  return myCart;
};

export const addItem = (item) => {
  // const myCart = getCart();
  // const newCart = { ...myCart, item };
  // JSON.stringy(localStorage.setItem());
  alert('ADD ITEM LOGIC HERE');
};

export const removeItem = (item) => {
  alert('REMOVE ITEM LOGIC HERE');
};
