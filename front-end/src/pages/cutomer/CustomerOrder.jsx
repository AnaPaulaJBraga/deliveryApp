import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import OrderCard from '../../components/OrderCard';
// import api from '../../services/api';
// import PropTypes from 'prop-types';

function CustomerOrder() {
  const [customer, setCustomer] = useState([]);
  // const role = 'customer';
  const { id, role } = JSON.parse(localStorage.getItem('user'));

  async function getCustomer() {
    // const { token } = JSON.parse(localStorage.getItem('user'));
    // const response = await api.get(`/customer/${id}`, {
    //   headers: {
    //     Authorization: token,
    //   },
    // });
    const response = {
      data: [],
    };

    // Exemplo da resposta do BD
    // response = {
    //   id da venda
    //   id do vendedor
    //   id do comprardor (esse que tem que ser utilizado aqui)
    //   status: 'Pendente',
    //   deliveryNumber: '12345',
    //   deliveryAddress: ' ',
    //   totalPrice: 'R$ 10,00',
    //   salesDate: '01/01/2020',
    //   orders[
    //     {
    //       id do produto
    //       nome do produto
    //       preco do produto
    //       saleProducts: {
    //         quantidade comprada
    //       }
    //     }
    //   ]
    // }

    const data = [
      {
        status: 'Pendente',
        deliveryNumber: '12345',
        totalPrice: 'R$ 10,00',
        salesDate: '01/01/2020',
      },
      {
        status: 'Entregue',
        deliveryNumber: '12',
        totalPrice: 'R$ 90,00',
        salesDate: '04/05/2022',
      },
    ];
    // data apenas para teste
    setCustomer((response.data.length > 0) ? response.data : data);
  }

  useEffect(() => {
    getCustomer();
  }, []);
  return (
    <div>
      <NavBar pageName="Pedidos" />
      {
        customer.map((order) => (
          <OrderCard
            key={ order.deliveryNumber }
            id={ id }
            role={ role }
            status={ order.status }
            deliveryNumber={ order.deliveryNumber }
            totalPrice={ order.totalPrice }
            salesDate={ order.salesDate }
          />
        ))
      }
    </div>
  );
}

// CustomerOrder.propTypes = {};

export default CustomerOrder;
