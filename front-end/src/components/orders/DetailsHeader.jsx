import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonSeller from './ButtonSeller';
import ButtonCustomer from './ButtonCustomer';
import api from '../../services/api';

function DetailsHeader({ data, role, token }) {
  const {
    id,
    sellerId,
    status,
    deliveryNumber,
    saleDate,
  } = data;
  const [sellerName, setSellerName] = React.useState('');
  const date = new Date(Date.parse(saleDate)).toLocaleDateString();

  async function getCustomer() {
    const { data: { name } } = await api.get(`/seller/${sellerId}`, {
      headers: {
        Authorization: token,
      },
    });
    setSellerName(name);
  }

  useEffect(() => {
    getCustomer();
  }, []);

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
      {role === 'customer' && (
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
          className="card text-primary text-center"
        >
          { sellerName }
        </p>
      )}
      <p
        className="card text-primary text-center"
        data-testid={
          `${role}_order_details__element-order-details-label-order-date`
        }
      >
        { date }
      </p>
      <p className="card text-primary text-center">{ status }</p>
      <div>
        {
          (role === 'customer') ? (
            <ButtonCustomer
              status={ status }
              token={ token }
            />)
            : (
              <ButtonSeller
                status={ status }
                token={ token }
              />)
        }
      </div>
    </div>
  );
}

DetailsHeader.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sellerId: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
  }).isRequired,
  role: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default DetailsHeader;
