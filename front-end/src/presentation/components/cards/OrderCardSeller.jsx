import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../../infra/data/contexts/Context';
import './OrderCard.css';

export default function OrderCard() {
  const {
    listOfOrders,
    setSelectedOrder,
  } = useContext(Context);

  function verifyIfIsSeller() {
    return window.location.pathname.includes('/seller/orders');
  }

  function renderAddress() {
    return (
      <div className="address">
        <p className="CEP">Endereço</p>
      </div>
    );
  }

  return (
    <div>
      {
        listOfOrders.map((order, index) => (
          <Link
            onClick={ () => setSelectedOrder(index) }
            key={ index }
            className="order-link"
            to="/customer/details"
          >
            <div
              className="card-order"
            >
              <div className="card-order-box">
                <div className="order-id-box">
                  <div>Pedido</div>
                  <div
                    data-testid={ `customer_orders__element-order-id--${index}` }
                  >
                    {`00${index + 1}`}
                  </div>
                </div>
                <div
                  className="status pendente-card"
                  data-testid={ `customer_orders__element-delivery-status--${index}` }
                >
                  Entregue
                </div>
                <div className="data-n-price">
                  <div
                    className="data"
                    data-testid={ `customer_orders__element-order-date--${index}` }
                  >
                    {`${listOfOrders[index].formattedDate}`}
                  </div>
                  <div
                    className="data"
                    data-testid={ `customer_orders__element-card-price--${index}` }
                  >
                    {`R$${listOfOrders[index].totalPrice.toFixed(2)}`}
                  </div>
                </div>
              </div>
              {verifyIfIsSeller() ? renderAddress() : '' }
            </div>
          </Link>
        ))
      }
    </div>
  );
}
