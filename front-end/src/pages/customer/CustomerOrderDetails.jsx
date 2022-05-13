import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Loading from '../../components/Loading';
import DetailsCard from '../../components/DetailsCard';
import api from '../../services/api';

function CustomerOrderDetails() {
  const { token, role: roleStorage } = JSON.parse(localStorage.getItem('user'));
  const [isLoading, setIsLoading] = useState(true);
  const [orderId] = useState(Number(window.location.pathname.split('/')[3]));
  const [dataOrder, setDataOrder] = useState([]);
  const [role, setRole] = useState('');

  async function getDataOrder() {
    const { data } = await api.get(`/saledetails/${orderId}`, {
      headers: {
        Authorization: token,
      },
    });
    setRole(roleStorage);
    setDataOrder(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getDataOrder();
  }, []);

  return (
    <div>
      <NavBar pageName="Pedidos" />
      { isLoading ? (<Loading />) : (
        <DetailsCard role={ role } data={ dataOrder } token={ token } />) }
    </div>
  );
}

export default CustomerOrderDetails;
