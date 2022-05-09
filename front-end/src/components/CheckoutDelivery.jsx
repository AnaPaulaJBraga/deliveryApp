import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function CheckoutDelivery() {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sellerList, setSellerList] = useState([]);
  const [sellerId, setSellerId] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    api.get('http://localhost:3001/getAll')// confirmar rota!!!!
      .then(({ data }) => {
        const filter = data.filter(data.role === 'seller');
        setSellerList(filter);
        setSellerId(filter[0].id);
      });
  }, []);

  const sendOrder = () => {
    navigate(`/customer/orders/${id}`);
  };

  const handleSeller = ({ target }) => {
    setSellerId(target.value);
  };

  const handleNumber = ({ target }) => {
    setDeliveryNumber(target.value);
  };

  const handleAddress = ({ target }) => {
    setDeliveryAddress(target.value);
  };

  return (
    <div>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <label htmlFor="seller">
          P. Vendedor Responsável
          <select
            data-testid="customer_checkout__select-seller"
            name="seller"
            id="seller"
            value={ sellerId }
            onChange={ handleSeller }

          >
            {sellerList.map(({ name, id }) => (
              <option key={ id } value={ id }>{ name }</option>
            ))}
          </select>
        </label>
        <label htmlFor="endereco">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            placeholder="Rua xxx"
            type="text"
            name="endereco"
            id="endereco"
            value={ deliveryAddress }
            onChange={ handleAddress }
          />
        </label>
        <label htmlFor="numero">
          Número
          <input
            data-testid="customer_checkout__input-addressNumber"
            placeholder="123"
            type="text"
            name="numero"
            id="numero"
            value={ deliveryNumber }
            onChange={ handleNumber }
          />
        </label>
      </div>
      <div>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ sendOrder }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}

export default CheckoutDelivery;
