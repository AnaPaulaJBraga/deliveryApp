import React from 'react';
// import PropTypes from 'prop-types';

function SalesCard({ id, status, order, address, price, date }) {
  return (
    <div className="card">
      <span className="card-body">
        <p
          className="card"
          id={ `seller_orders__element-delivery-status-${id}` }
        >
          {status}
        </p>
        <p className="card" id={ `seller_orders__element-order-id-${id}` }>{order}</p>
        <p
          className="card"
          id={ `seller_orders__element-card-address-${id}` }
        >
          {address}
        </p>
        <p className="card" id={ `seller_orders__element-card-price-${id}` }>{price}</p>
        <p className="card" id={ `seller_orders__element-order-date-${id}` }>{date}</p>
      </span>
    </div>
  );
}

SalesCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default SalesCard;
