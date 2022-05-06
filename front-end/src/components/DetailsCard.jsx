import React from 'react';
import PropTypes from 'prop-types';
import DetailsHeader from './DetailsHeader';

function DetailsCard({ data }) {
  const {
    order,
  } = data;
  const total = order.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <div>
      <h5>Detalhe do Pedido</h5>

      <div className="card card-body bg-primary mb-3">
        <DetailsHeader data={ data } />
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <p>Item</p>
          <p>Descrição</p>
          <p>Quantidade</p>
          <p>Valor Unitário</p>
          <p>Sub-total</p>
        </div>
        {order.map((item) => (
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3" key={ item.id }>
            <p className="card text-primary text-center">{item.id}</p>
            <p className="card text-primary text-center">{item.name}</p>
            <p className="card text-primary text-center">{item.quantity}</p>
            <p className="card text-primary text-center">
              R$
              { ' ' }
              {item.price}

            </p>
            <p className="card text-primary text-center">
              R$
              { ' ' }
              {(item.quantity * item.price).toFixed(2)}
            </p>
          </div>
        ))}
        <div className="text-end">
          Total:
          { ' ' }
          R$
          { ' ' }
          {total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    salesDate: PropTypes.string.isRequired,
    order: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default DetailsCard;
