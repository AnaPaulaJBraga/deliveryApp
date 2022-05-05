import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import OrderCard from '../components/OrderCard';

function SalesOrder() {
  const [sales, setSales] = useState([]);
  console.log('=====>', sales);
  const role = 'sales';
  const id = 1;

  async function getSales() {
    // const response = await fetch('/api/sales/id');
    // const data = await response.json();
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

    setSales(data);
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
