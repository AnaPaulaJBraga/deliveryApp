import React from 'react';
import PropTypes from 'prop-types';

function DetailsBody({ data, role }) {
  const {
    orders,
  } = data;
  let count = 0;

  return orders.map((item) => {
    count += 1;
    return (
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3" key={ item.id }>
        <p
          className="card text-primary text-center"
          data-testid={
            `${role}_order_details__element-order-table-item-number-${count}`
          }
        >
          {count}
        </p>
        <p
          className="card text-primary text-center"
          data-testid={
            `${role}_order_details__element-order-table-name-${count}`
          }
        >
          {item.name}
        </p>
        <p
          className="card text-primary text-center"
          data-testid={
            `${role}_order_details__element-order-table-quantity-${count}`
          }
        >
          { item.salesProduct.quantity }
        </p>
        <p
          className="card text-primary text-center"
          data-testid={
            `${role}_order_details__element-order-table-unit-price-${count}`
          }
        >
          {` R$ ${item.price}`}
        </p>
        <p
          className="card text-primary text-center"
          data-testid={
            `${role}_order_details__element-order-table-sub-total-${count}`
          }
        >
          {`R$ ${(item.salesProduct.quantity * item.price).toFixed(2)}`}
        </p>
      </div>
    );
  });
}

DetailsBody.propTypes = {
  data: PropTypes.shape({
    orders: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      salesProduct: PropTypes.shape({
        quantity: PropTypes.number.isRequired,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  role: PropTypes.string.isRequired,
};

export default DetailsBody;
