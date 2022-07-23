import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import formatData from '../../../main/useCases/formatDate';
import { getOrders } from '../../../main/hooks/useHttp';
import './OrderCard.css';
import OrderCard from './OrderCard';

export default function OrdersBoardSeller() {
  const [listOfOrders, setListOfOrders] = useState({});

  useEffect(() => {
    async function getSellersName() {
      const orderResponse = await getOrders();
      setListOfOrders(orderResponse);
    }
    getSellersName();
  }, []);

  return (
    <div>
      {
        listOfOrders && listOfOrders.length > 0 && listOfOrders.map((order, index) => (
          <Link
            onClick={ () => setSelectedOrder(index) }
            key={ index }
            className="order-link"
            to={ `/seller/orders/${order.id}` }
          >
            <OrderCard
              index={ index }
              saleID={ order.id }
              saleStatus={ order.status }
              saleDate={ formatData(order.saleDate) }
              saleTotalPrice={ order.totalPrice }
              saleAddress={ order.deliveryAddress }
              saleAddressNumber={ order.deliveryNumber }
              userRole="seller"
            />
          </Link>
        ))
      }
    </div>
  );
}
