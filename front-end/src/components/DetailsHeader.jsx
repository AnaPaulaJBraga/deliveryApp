import React from 'react';
import PropTypes from 'prop-types';

function DetailsHeader(props) {
  const { data } = props;
  const {
    id,
    role,
    status,
    deliveryNumber,
    salesDate,
  } = data;

  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-details-label-order-${id}`
        }
      >
        Pedido
        {' '}
        {deliveryNumber}
      </p>
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-details-label-order-date`
        }
      >
        { salesDate }
      </p>
      <p className="card text-primary text-center">{ status }</p>
      <button
        type="button"
        className="btn btn-warning btn-sm"
        data-testid={ `${role}_order_details__button-preparing-check` }
      >
        <h6 className="fs-6">PREPARAR PEDIDO</h6>
      </button>
      <button
        type="button"
        className="btn btn-success btn-sm"
        data-testid={ `${role}_order_details__button-dispatch-check` }
      >
        <h6 className="fs-6">PREPARAR PEDIDO</h6>
      </button>
    </div>
  );
}

DetailsHeader.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    salesDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsHeader;
