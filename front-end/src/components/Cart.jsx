// import React from 'react';

export const getCart = () => {
  console.log('IN getCart');
  const myCart = JSON.parse(localStorage.getItem('cartData'));
  if (!myCart) {
    localStorage.setItem('cartData', JSON.stringify([]));
    return [];
  }
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
