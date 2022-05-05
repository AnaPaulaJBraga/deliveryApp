// import React from 'react';

export const getCart = () => {
  console.log('IN getCart');
  const myCart = JSON.parse(localStorage.getItem('cartData'));
  if (!myCart) {
    console.log('LOCAL CART WAS EMPTY!');
    localStorage.setItem('cartData', JSON.stringify([]));
    return [];
  }
  console.log('local cart was NOT empty!');
  // const newWay = localStorage.userData();
  console.log('\n\n\n current Cart:', myCart);
  // console.log('\n userData:', localStorage.getItem('userData'));
  return myCart;
};

export const setCart = (item) => {
  const myCart = getCart();
  console.log(myCart);
  // const newCart = [...myCart, item];
  const newCart = item;
  JSON.stringify(localStorage.setItem('cartData', newCart));
};

export const removeItem = ({ id }) => {
  const myCart = getCart();
  const itemRemoved = myCart.filter((item) => item.id !== id);
  JSON.stringify(localStorage.setItem('cartData', itemRemoved));
  console.log('\n\n Removing the item: ', id, '\n newCart: ', itemRemoved);
};

// cartData from storage is an array
