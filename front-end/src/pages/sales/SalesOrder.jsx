import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar';
import Loading from '../../components/Loading';
import OrderCard from '../../components/OrderCard';
import api from '../../services/api';
import dataMocked from '../../data/dataMocked';

function SalesOrder() {
  const { token, role: roleStorage, id } = JSON.parse(localStorage.getItem('user'));
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState('');

  async function getSales() {
    const response = await api.get(`/sale/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    const data = dataMocked;
    setRole(roleStorage);
    setSales((response.data.length > 0) ? response.data : data);
    setIsLoading(false);
  }

  useEffect(() => {
    getSales();
  }, []);

  return (
    <div>
      <Navbar pageName="Pedidos" />
      { isLoading ? <Loading /> : (
        sales.map((sale) => (
          <OrderCard
            key={ sale.deliveryNumber }
            id={ sale.id }
            sellerId={ sale.sellerId }
            role={ role }
            status={ sale.status }
            deliveryNumber={ sale.deliveryNumber }
            deliveryAddress={ sale.deliveryAddress }
            totalPrice={ sale.totalPrice }
            salesDate={ sale.salesDate }
          />
        ))
      )}
    </div>
  );
}

export default SalesOrder;
