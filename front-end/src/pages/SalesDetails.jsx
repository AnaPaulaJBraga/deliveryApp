import React, { useState } from 'react';
import DetailsCard from '../components/DetailsCard';
import Navbar from '../components/NavBar';

function SalesDetails() {
  // api get saledetails/:id(do produto)
  const [dataOrder] = useState({
    id: 2,
    role: 'seller',
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

  // async function getDetailsOrder() {
  //   const data = {
  //     status: 'Pendente',
  //     deliveryNumber: '12345',
  //     salesDate: '01/01/2020',
  //     order: [
  //       {
  //         id: 1,
  //         name: 'Produto 1',
  //         price: 'R$ 10,00',
  //         quantity: 1,
  //       },
  //       {
  //         id: 2,
  //         name: 'Produto 2',
  //         price: 'R$ 10,00',
  //         quantity: 1,
  //       },
  //     ],
  //   };

  //   setDataOrder(data);
  // }

  // useEffect(() => {
  //   getDetailsOrder();
  // }, []);

  return (
    <div>
      <Navbar pageName="Pedidos" />
      <DetailsCard data={ dataOrder } />
    </div>
  );
}

export default SalesDetails;
