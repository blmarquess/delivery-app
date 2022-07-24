import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSellerOrderById } from '../../main/hooks/useHttp';

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

  return (
    <div className="checkout-page">
      <HeaderCustomer />
      <h1>Detalhe do Pedido</h1>
      <div className="checkout">
        <div className="header-details">
          {/* <h2 className="hearder-id">{`PEDIDO 00${selectedOrder + 1}`}</h2> */}
          <p className="hearder-seller">
            {/* {`P. Vend: ${orderDetails.seller}`} */}
          </p>
          <h2 className="entregue">ENTREGUE</h2>
          <h2 className="hearder-date">13/13/2013</h2>
          <button className="header-button" type="button">PREPARAR PEDIDO</button>
          <button className="header-button" type="button">SAIU PARA ENTREGA</button>
        </div>
        <div className="list-titles">
          <h2 className="title-item">Item</h2>
          <h2 className="title-description">Descrição</h2>
          <h2 className="title-quantity">Quantidade</h2>
          <h2 className="title-unit-value">Valor-Unitário</h2>
          <h2 className="title-sub-total">Sub-total</h2>
        </div>
        {/* {
          orderDetails .products.map((product, i) => (
            <ul key={ product.name } className="products-list">
              <li
                className="item"
                data-testid={
                  `customer_checkout__element-order-table-item-number-${i}`
                }
              >
                1
              </li>
              <li
                className="description"
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
              >
                { product.name }
              </li>
              <li
                className="quantity"
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
              >
                {product.qtd}
              </li>
              <li
                className="unit-value"
                data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
              >
                { `R$ ${product.price}` }
              </li>
              <li
                className="sub-total"
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
              >
                { `R$ ${product.subTotal.toFixed(2)}` }
              </li>
            </ul>
          ))
        } */}
        <div>
          <ButtonSD
            psize="1.5rem 2rem"
            radius="10px"
            data-testid="customer_checkout__element-order-total-price"
          >
            {/* {`Total: R$ ${cart.totalCarPrice.toFixed(2)}`} */}
          </ButtonSD>
        </div>
      </div>
    </div>
  );
}
