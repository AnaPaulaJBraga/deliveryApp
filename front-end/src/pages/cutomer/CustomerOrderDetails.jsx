import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import DetailsCard from '../../components/DetailsCard';

function CustomerOrderDetails() {
  // api get saledetails/:id(do produto)
  const [dataOrder] = useState({
    id: 2,
    role: 'customer',
    status: 'Pendente',
    deliveryNumber: '12345',
    salesDate: '01/01/2020',
    order: [
      {
        id: 1,
        name: 'Produto 1',
        price: 10,
        quantity: 1,
      },
      {
        id: 2,
        name: 'Produto 2',
        price: 10,
        quantity: 3,
      },
    ],
  });

  return (
    <div>
      <NavBar pageName="Pedidos" />
      <DetailsCard data={ dataOrder } />
    </div>
  );
}

export default CustomerOrderDetails;
