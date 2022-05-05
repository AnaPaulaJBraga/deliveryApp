// import React from 'react';

export const getCart = () => {
  // const myCart = JSON.parse(localStorage.getItem('cartData'));
  const myCart = localStorage.getItem('cartData');
  if (!myCart) {
    console.log('LOCAL CART WAS EMPTY!');
    localStorage.setItem('cartData', JSON.stringify([]));
    return [];
  }
  console.log('local cart was NOT empty!');
  // const newWay = localStorage.userData();
  // console.log('\n userData:', localStorage.getItem('userData'));
  return JSON.parse(myCart);
};

export const setCart = (item) => {
  const myCart = getCart();
  console.log(myCart);
  // const newCart = [...myCart, item];
  const newCart = item;
  localStorage.setItem('cartData', JSON.stringify(newCart));
};

export const removeItem = ({ id }) => {
  const myCart = getCart();
  const itemRemoved = myCart.filter((item) => item.id !== id);
  localStorage.setItem('cartData', JSON.stringify(itemRemoved));
  console.log('\n\n Removing the item: ', id, '\n newCart: ', itemRemoved);
};

// cartData from storage is an array
