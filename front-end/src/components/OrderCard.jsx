import React from 'react';
import PropTypes from 'prop-types';

function SalesCard(props) {
  const {
    id, role, status,
    deliveryNumber, deliveryAddress,
    totalPrice, salesDate } = props;

  return (
    <div className="card card-body bg-primary mb-3">
      <p
        className="card"
        data-testid={ `${role}_orders__element-delivery-status-${id}` }
      >
        {status}
      </p>
      <p
        className="card"
        data-testid={ `${role}_orders__element-order-id-${id}` }
      >
        {deliveryNumber}
      </p>
      <p
        className="card"
        data-testid={ `${role}_orders__element-card-address-${id}` }
      >
        {deliveryAddress}
      </p>
      <p
        className="card"
        data-testid={ `${role}_orders__element-card-price-${id}` }
      >
        {totalPrice}
      </p>
      <p
        className="card"
        data-testid={ `${role}_orders__element-order-date-${id}` }
      >
        {salesDate}
      </p>
    </div>
  );
}

SalesCard.propTypes = {
  id: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  salesDate: PropTypes.string.isRequired,
};

export default SalesCard;
