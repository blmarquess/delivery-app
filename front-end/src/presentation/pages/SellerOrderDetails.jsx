import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSellerOrderById } from '../../main/hooks/useHttp';
import formatOrderNumber from '../../main/useCases/formatOrderNumber';
import formatDate from '../../main/useCases/formatDate';

import ButtonSD from '../components/basis/ButtonSD';
import HeaderCustomer from '../components/header/HeaderCustomer';
import './styles/CustomerCheckout.css';
import './styles/CustomerOrderDetails.css';

export default function SellerOrderDetails() {
  const [orderDetails, serOrderData] = useState(null);
  const orderIdByPath = useParams().id;

  useEffect(() => {
    async function getOrderDataInAPI(orderID) {
      const { data } = await getSellerOrderById(orderID);
      return serOrderData(() => data);
    }

    if (!orderDetails) { return getOrderDataInAPI(orderIdByPath); }
  }, [orderDetails, orderIdByPath]);

  const orderID = orderDetails ? orderDetails.id : 1;
  return (
    <div className="checkout-page">
      <HeaderCustomer />
      <h1>Detalhe do Pedido</h1>
      {orderDetails && (
        <div className="checkout">

          <div className="header-details">

            <h2
              className="hearder-id"
              data-testid="seller_order_details__element-order-details-label-order-id"
            >
              PEDIDO
              {' '}
              { formatOrderNumber(orderID) }
            </h2>

            <h2
              className="hearder-date"
              data-testid="seller_order_details__element-order-details-label-order-date"
            >
              { formatDate(orderDetails.saleDate) }
            </h2>
            <h2
              className={ orderDetails.status }
              data-testid="
            seller_order_details__element-order-details-label-delivery-status"
            >
              { orderDetails.status }
            </h2>
            <button
              className="header-button"
              type="button"
              data-testid="seller_order_details__button-preparing-check"
            >
              PREPARAR PEDIDO
            </button>
            <button
              className="header-button"
              type="button"
              data-testid="seller_order_details__button-dispatch-check"
            >
              SAIU PARA ENTREGA
            </button>
          </div>
          <div className="list-titles">
            <h3 className="title-item">Item</h3>
            <h3 className="title-description">Descrição</h3>
            <h3 className="title-quantity">Quantidade</h3>
            <h3 className="title-unit-value">Valor-Unitário</h3>
            <h3 className="title-sub-total">Sub-total</h3>
          </div>

          {orderDetails && orderDetails.products.map((product, i) => (
            <ul key={ product.name } className="products-list">
              <li
                className="item"
                data-testid={
                  `seller_order_details__element-order-table-item-number-${i + 1}`
                }
              >
                {i + 1}
              </li>
              <li
                className="description"
                data-testid={ `seller_order_details__element-order-table-name-${i + 1}` }
              >
                { product.name }
              </li>
              <li
                className="quantity"
                data-testid={
                  `seller_order_details__element-order-table-quantity-${i + 1}`
                }
              >
                { product.quantity }
              </li>
              <li
                className="unit-value"

              >
                R$
                <span
                  data-testid={
                    `seller_order_details__element-order-table-unit-price-${i + 1}`
                  }
                >
                  { `${product.price}`.replace('.', ',') }
                </span>
              </li>
              <li className="sub-total">
                R$
                <span
                  data-testid={
                    `seller_order_details__element-order-table-sub-total-${i + 1}`
                  }
                >
                  { `${product.price * product.quantity}`.replace('.', ',') }
                </span>
              </li>
            </ul>
          ))}
          <div>
            <ButtonSD
              psize="1.5rem 2rem"
              radius="10px"
            >
              Total: R$
              <span data-testid="seller_order_details__element-order-total-price">
                {`${orderDetails.totalPrice}`.replace('.', ',')}
              </span>
            </ButtonSD>
          </div>

        </div>
      )}
    </div>
  );
}
