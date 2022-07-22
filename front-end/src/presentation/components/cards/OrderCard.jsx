import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import formatData from '../../../main/useCases/formatDate';
import { getOrders } from '../../../main/hooks/useHttp';
import './OrderCard.css';

export default function OrderCard() {
  const [listOfOrders, setListOfOrders] = React.useState({});

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
            to={ `/customer/orders/${order.id}` }
          >
            <div
              className="card-order"
            >
              <div className="card-order-box">
                <div className="order-id-box">
                  <div>Pedido</div>
                  <div
                    data-testid={ `customer_orders__element-order-id--${order.id}` }
                  >
                    {`00${index + 1}`}
                  </div>
                </div>
                <div
                  className="status pendente-card"
                  data-testid={ `customer_orders__element-delivery-status--${order.id}` }
                >
                  Entregue
                </div>
                <div className="data-n-price">
                  <div
                    className="data"
                    data-testid={ `customer_orders__element-order-date--${order.id}` }
                  >
                    { formatData(listOfOrders[index].saleDate) }
                  </div>
                  <div
                    className="data"
                    data-testid={ `customer_orders__element-card-price--${order.id}` }
                  >
                    {`R$${listOfOrders[index].totalPrice}`}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  );
}
