import React, { useState, useEffect } from 'react';
import DetailsCard from '../../components/DetailsCard';
import Navbar from '../../components/NavBar';
import Loading from '../../components/Loading';
import api from '../../services/api';

function SalesDetails() {
  const { token, role: roleStorage } = JSON.parse(localStorage.getItem('user'));
  const [isLoading, setIsLoading] = useState(true);
  const [orderId] = useState(Number(window.location.pathname.split('/')[3]));
  const [dataOrder, setDataOrder] = useState([]);
  const [role, setRole] = useState('sales');

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
      <Navbar pageName="Pedidos" />
      { isLoading ? <Loading /> : (
        <DetailsCard data={ dataOrder } role={ role } token={ token } />)}
    </div>
  );
}

export default SalesDetails;
