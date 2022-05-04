import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import SalesCard from '../components/SalesCard';
// import PropTypes from 'prop-types';

function SalesOrder() {
  const [sales] = useState([
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
  ]);
  return (
    <div>
      <Navbar />
      {
        sales.map((sale) => (
          <SalesCard
            key={ sale.order }
            id="1"
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
