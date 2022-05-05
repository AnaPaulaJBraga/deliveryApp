import React from 'react';

function CheckoutDelivery() {
  return (
    <div>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <label htmlFor="seller">
          P. Vendedora Responsável
          <select
            data-testid="customer_checkout__select-seller"
            name="seller"
            id="seller"
          >
            <option value="">Fulana Pereira</option>
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
          />
        </label>
      </div>
      <div>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}

export default CheckoutDelivery;
