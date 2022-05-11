import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Loading from '../../components/Loading';
import DetailsCard from '../../components/DetailsCard';
import dataMocked from '../../data/dataMocked';

function CustomerOrderDetails() {
  // api get saledetails/:id(do produto)
  const [isLoading, setIsLoading] = useState(true);
  const [orderId] = useState(Number(window.location.pathname.split('/')[3]));
  const [dataOrder, setDataOrder] = useState([]);
  const [role] = useState('customer');

  async function getDataOrder() {
    setDataOrder(dataMocked.find((item) => item.id === orderId));
    setIsLoading(false);
  }

  useEffect(() => {
    getDataOrder();
  }, []);

  return (
    <div>
      <NavBar pageName="Pedidos" />
      {isLoading ? (<Loading />) : <DetailsCard role={ role } data={ dataOrder } /> }
    </div>
  );
}

export default CustomerOrderDetails;
