import React from 'react';
import PropTypes from 'prop-types';
import Address from './orders/Address';

function OrderCard(props) {
  const {
    id, role, status,
    deliveryNumber, totalPrice, saleDate } = props;
  const date = new Date(Date.parse(saleDate)).toLocaleDateString();

  const PATH = (role === 'seller') ? '/seller/orders' : '/customer/orders';

  return (
    <a
      className="card card-body bg-primary mb-3"
      href={ `${PATH}/${id}` }
      data-testid={ `${role}_products__element-card-title-${id}` }
    >
      <p
        className="card text-primary text-center"
        data-testid={ `${role}_orders__element-delivery-status-${id}` }
      >
        {status}
      </p>
      <p
        className="card text-primary text-center"
        data-testid={ `${role}_orders__element-order-id-${id}` }
      >
        {deliveryNumber}
      </p>
      {
        (role === 'seller')
          ? <Address data={ props } /> : null
      }
      <p
        className="card text-primary text-center"
        data-testid={ `${role}_orders__element-card-price-${id}` }
      >
        {`R$ ${totalPrice}`}
      </p>
      <p
        className="card text-primary text-center"
        data-testid={ `${role}_orders__element-order-date-${id}` }
      >
        {date}
      </p>
    </a>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
};

export default OrderCard;
