import React from 'react';
import Navbar from '../components/NavBar';
import SalesCard from '../components/SalesCard';
// import PropTypes from 'prop-types';

function SalesOrder() {
  const [sales] = React.useState([
    {
      status: 'Pendente',
      order: '12345',
      address: 'Rua dos bobos, 0',
      price: 'R$ 10,00',
      date: '01/01/2020',
    },
    {
      status: 'Entregue',
      order: '12',
      address: 'Rua dos bobos, 1',
      price: 'R$ 90,00',
      date: '04/05/2022',
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
            order={ sale.order }
            address={ sale.address }
            price={ sale.price }
            date={ sale.date }
          />
        ))
      }
    </div>
  );
}

// SalesOrder.propTypes = {};

export default SalesOrder;
