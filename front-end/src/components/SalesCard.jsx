import React from 'react';
// import PropTypes from 'prop-types';

function SalesCard(props) {
  const { id, status, deliveryNumber, deliveryAddress, totalPrice, salesDate } = props;
  return (
    <span className="card-body">
      <p
        className="card"
        id={ `seller_orders__element-delivery-status-${id}` }
      >
        {status}
      </p>
      <p
        className="card"
        id={ `seller_orders__element-order-id-${id}` }
      >
        {deliveryNumber}
      </p>
      <p
        className="card"
        id={ `seller_orders__element-card-address-${id}` }
      >
        {deliveryAddress}
      </p>
      <p
        className="card"
        id={ `seller_orders__element-card-price-${id}` }
      >
        {totalPrice}
      </p>
      <p
        className="card"
        id={ `seller_orders__element-order-date-${id}` }
      >
        {salesDate}
      </p>
    </span>
  );
}

SalesCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  salesDate: PropTypes.string.isRequired,
};

export default SalesCard;
