import React from 'react';
import PropTypes from 'prop-types';

function DetailsBody(props) {
  const { data } = props;
  const {
    role,
    order,
  } = data;

  return order.map((item) => (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3" key={ item.id }>
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-table-item-number-${item.id}`
        }
      >
        {item.id}
      </p>
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-table-name-${item.id}`
        }
      >
        {item.name}
      </p>
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-table-quantity-${item.id}`
        }
      >
        {item.quantity}
      </p>
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-table-unit-price-${item.id}`
        }
      >
        {` R$ ${item.price}`}
      </p>
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-table-sub-total-${item.id}`
        }
      >
        {`R$ ${(item.quantity * item.price).toFixed(2)}`}
      </p>
    </div>
  ));
}

DetailsBody.propTypes = {
  data: PropTypes.shape({
    role: PropTypes.string.isRequired,
    order: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default DetailsBody;
