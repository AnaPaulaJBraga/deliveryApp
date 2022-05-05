import React from 'react';
// import Navbar from '../components/NavBar';
import CheckoutDelivery from '../components/CheckoutDelivery';
import CheckoutList from '../components/CheckoutList';

function Checkout() {
  return (
    <div>
      {/* <NavBar /> */}
      <CheckoutList />
      <CheckoutDelivery />
    </div>
  );
}

export default Checkout;
