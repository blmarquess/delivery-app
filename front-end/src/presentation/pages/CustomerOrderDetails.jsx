import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../main/hooks/useHttp';
import formatData from '../../main/useCases/formatDate';
import formatOrderNumber from '../../main/useCases/formatOrderNumber';
import {
  deliveryStatus,
  orderDate,
  orderId,
  sellerName,
} from '../testids/dataTestids';
import ButtonSD from '../components/basis/ButtonSD';
import HeaderCustomer from '../components/header/HeaderCustomer';
import './styles/CustomerCheckout.css';
import './styles/CustomerOrderDetails.css';

export default function CustomerCheckout() {
  const [order, setOrder] = React.useState({});
  const location = useParams();

  useEffect(() => {
    async function getOrder() {
      const { data } = await getOrderById(location.id);
      setOrder(data);
    }
    getOrder();
  }, [location.id]);
  return (
    <div className="checkout-page">
      <HeaderCustomer />
      <h1>Detalhe do Pedido</h1>
      {order && order.id
        && (
          <div className="checkout">
            <div className="header-details">
              <h2
                className="hearder-id"
                data-testid={ `customer_order_details${orderId}` }
              >
                {formatOrderNumber(order.id)}
              </h2>
              <p
                className="hearder-seller"
                data-testid={ `customer_order_details${sellerName}` }
              >
                {`P. Vend: ${order.seller.name}`}
              </p>
              <h2
                className="entregue"
                data-testid={ `customer_order_details${deliveryStatus}` }
              >
                Pendente
              </h2>
              <h2
                className="hearder-date"
                data-testid={ `customer_order_details${orderDate}` }
              >
                {formatData(order.saleDate)}
              </h2>
              <button
                disabled={ order.status !== 'Em Trânsito' }
                className="header-button"
                type="button"
                data-testid="customer_order_details__button-delivery-check"
              >
                Marcar como entregue
              </button>
            </div>
            <div className="list-titles">
              <h2 className="title-item">Item</h2>
              <h2 className="title-description">Descrição</h2>
              <h2 className="title-quantity">Quantidade</h2>
              <h2 className="title-unit-value">Valor-Unitário</h2>
              <h2 className="title-sub-total">Sub-total</h2>
            </div>

            {order.products.map((product, i) => (

              <ul key={ product.id + product.name } className="products-list">
                <li
                  className="item"
                  data-testid={
                    `customer_order_details__element-order-table-item-number--${i + 1}`
                  }
                >
                  {i + 1}
                </li>
                <li
                  className="description"
                  data-testid={
                    `customer_order_details__element-order-table-name--${i + 1}`
                  }
                >
                  { product.name }
                </li>
                <li
                  className="quantity"
                  data-testid={
                    `customer_order_details__element-order-table-quantity--${i + 1}`
                  }
                >
                  { product.quantity }
                </li>
                <li className="unit-value">
                  R$
                  <span
                    data-testid={
                      `customer_order_details__element-order-table-unit-price--${i + 1}`
                    }
                  >
                    { `${product.price.replace('.', ',')}` }
                  </span>
                </li>
                <li className="sub-total">
                  <span
                    data-testid={
                      `customer_order_details__element-order-table-sub-total--${i + 1}`
                    }
                  >
                    R$
                  </span>
                  { `${product.price * product.quantity}` }
                </li>
              </ul>
            ))}

            <div>
              <ButtonSD
                psize="1.5rem 2rem"
                radius="10px"
              >
                Total: R$
                <span
                  data-testid="customer_order_details__element-order-total-price"
                >
                  {`${order.totalPrice.replace('.', ',')}`}
                </span>
              </ButtonSD>
            </div>
          </div>
        )}

    </div>
  );
}
