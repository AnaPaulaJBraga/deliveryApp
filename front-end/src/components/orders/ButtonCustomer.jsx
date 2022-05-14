import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

function ButtonCustomer({ status, token }) {
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

  useEffect(() => { }, [newStatus]);

  return (
    <div>
      <button
        type="button"
        className="btn btn-success btn-sm"
        data-testid="customer_order_details__button-delivery-check" // tem que trocar
        onClick={ changeStatus }
        disabled={ newStatus !== 'Em Trânsito' }
        value="Entregue"
      >
        Confirmar recebimento
      </button>
    </div>
  );
}

ButtonCustomer.propTypes = {
  status: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default ButtonCustomer;
