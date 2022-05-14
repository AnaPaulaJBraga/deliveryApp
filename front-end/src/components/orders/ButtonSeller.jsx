import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

function ButtonSeller({ status, token }) {
  const [newStatus, setNewStatus] = useState(status);
  async function changeStatus(e) {
    const id = Number(window.location.pathname.split('/')[3]);
    const { value } = e.target;
    await api.put('/statusupdate',
      {
        id,
        status: value,
      },
      {
        headers: {
          Authorization: token,
        },
      });
    setNewStatus(value);
  }

  useEffect(() => {

  }, [newStatus]);

  return (
    <div className="form-inline">
      <p
        className="container card text-primary text-center"
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { newStatus }
      </p>
      <div className="container-fluid d-flex">
        <button
          type="button"
          className="btn btn-warning btn-sm"
          data-testid="seller_order_details__button-preparing-check"
          onClick={ changeStatus }
          disabled={ newStatus !== 'Pendente' }
          value="Preparando"
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          className="btn btn-success btn-sm"
          data-testid="seller_order_details__button-dispatch-check"
          onClick={ changeStatus }
          disabled={ newStatus !== 'Preparando' }
          value="Em Trânsito"
        >
          SAIU PARA ENTREGA
        </button>
      </div>
    </div>
  );
}

ButtonSeller.propTypes = {
  status: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default ButtonSeller;
