import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function DetailsCard({ dataOrder }) {
  const {
    status,
    deliveryNumber,
    salesDate,
    order,
  } = dataOrder;

  return (
    <div>
      <h5>Detalhe do Pedido</h5>
      {/* <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            Pedido
            {' '}
            { deliveryNumber }
          </div>
          <div className="col-md-6">{ salesDate }</div>
          <div className="col-md-6">{ status }</div>
          <Button variant="primary">PREPARAR PEDIDO</Button>
          <Button variant="secundary">SAIU PARA ENTREGA</Button>
        </div>
        <div className="row">
          <p className="col-md-12">Item</p>
          <p className="col-md-12">Descrição</p>
          <p className="col-md-12">Quantidade</p>
          <p className="col-md-12">Valor Unitário</p>
          <p className="col-md-12">Sub Total</p>
        </div>
        { order.map((item) => (
          <div className="row" key={ item.id }>
            <p className="col-md-12">{ item.id }</p>
            <p className="col-md-12">{ item.name }</p>
            <p className="col-md-12">{ item.quantity }</p>
            <p className="col-md-12">{ item.price }</p>
            <p className="col-md-12">{ item.quantity * item.price }</p>
          </div>
        )) }
      </div> */}
    </div>
  );
}

DetailsCard.propTypes = {
  dataOrder: PropTypes.shape({
    status: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    salesDate: PropTypes.string.isRequired,
    order: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default DetailsCard;
