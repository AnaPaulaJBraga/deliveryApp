// import React from 'react';

export const getCart = () => {
  const myCart = localStorage.getItem('cartData');
  if (!myCart) {
    localStorage.setItem('cartData', JSON.stringify([]));
    return [];
  }
  return JSON.parse(myCart);
};

export const setCart = (item) => {
  const myCart = getCart();
  if (myCart.length < 1) {
    // console.log('added first item to cart!');
    return localStorage.setItem('cartData', JSON.stringify([item]));
  }
  const duplicateCheck = myCart.filter((product) => product.id !== item.id);
  const newCart = [...duplicateCheck, item];
  localStorage.setItem('cartData', JSON.stringify(newCart));
  // CALL IN PRICE CALC HERE
  // console.log('added to the cart!');
};

export const removeItem = (id) => {
  // console.log('REMOVING ITEM FROM CART!');
  const myCart = getCart();
  const itemRemoved = myCart.filter((item) => item.id !== id);
  localStorage.setItem('cartData', JSON.stringify(itemRemoved));
  // console.log('\n\n Removing the item: ', id, '\n newCart: ', itemRemoved);
};

// cartData from storage is an array of products. Check ProductCard to see its structure.
