import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Loading from '../../components/Loading';
import OrderCard from '../../components/OrderCard';
import dataMocked from '../../data/dataMocked';
import api from '../../services/api';

function CustomerOrder() {
  const { id, token, role: roleStorage } = JSON.parse(localStorage.getItem('user'));
  const [customer, setCustomer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState('');

  async function getCustomer() {
    const response = await api.get(`/customer/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    const data = dataMocked;
    setRole(roleStorage);
    setCustomer((response.data.length > 0) ? response.data : data);
    setIsLoading(false);
  }

  useEffect(() => {
    getCustomer();
  }, []);
  return (
    <div>
      <NavBar pageName="Pedidos" />
      { isLoading ? <Loading /> : (
        customer.map((order) => (
          <OrderCard
            key={ order.deliveryNumber }
            id={ order.id }
            role={ role }
            status={ order.status }
            deliveryNumber={ order.deliveryNumber }
            totalPrice={ order.totalPrice }
            salesDate={ order.salesDate }
          />
        ))
      )}
    </div>
  );
}

export default CustomerOrder;
