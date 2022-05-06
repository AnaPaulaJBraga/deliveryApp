import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import OrderCard from '../components/OrderCard';
import api from '../services/api';

function SalesOrder() {
  const [sales, setSales] = useState([]);
  const role = 'sales';
  const { id } = JSON.parse(localStorage.getItem('userData'));

  async function getSales() {
    const { token } = JSON.parse(localStorage.getItem('userData'));
    const response = await api.get(`/sale/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    const data = [
      {
        status: 'Pendente',
        deliveryNumber: '12345',
        deliveryAddress: 'Rua dos bobos, 0',
        totalPrice: 'R$ 10,00',
        salesDate: '01/01/2020',
      },
      {
        status: 'Entregue',
        deliveryNumber: '12',
        deliveryAddress: 'Rua dos bobos, 1',
        totalPrice: 'R$ 90,00',
        salesDate: '04/05/2022',
      },
    ];
    // data apenas para teste
    setSales((response.data.length > 0) ? response.data : data);
  }

  useEffect(() => {
    getSales();
  }, []);

  return (
    <div>
      <Navbar />
      {
        sales.map((sale) => (
          <OrderCard
            key={ sale.deliveryNumber }
            id={ id }
            role={ role }
            status={ sale.status }
            deliveryNumber={ sale.deliveryNumber }
            deliveryAddress={ sale.deliveryAddress }
            totalPrice={ sale.totalPrice }
            salesDate={ sale.salesDate }
          />
        ))
      }
    </div>
  );
}

export default SalesOrder;
