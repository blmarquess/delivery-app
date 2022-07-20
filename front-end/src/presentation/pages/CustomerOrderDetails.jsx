import React, { useContext, useState, useEffect } from 'react';
import Context from '../../infra/data/contexts/Context';
import { getSellersNameDB } from '../../main/hooks/useHttp';
import ButtonSD from '../components/basis/ButtonSD';
// import TotalPrice from '../components/basis/TotalPrice';
import HeaderCustomer from '../components/header/HeaderCustomer';
import './styles/CustomerCheckout.css';
import './styles/CustomerOrderDetails.css';

export default function CustomerCheckout() {
  const { cart } = useContext(Context);
  const [carProducts, setCarProducts] = useState([]);

  useEffect(() => {
    async function getSellersName() {
      const sellers = await getSellersNameDB();
      setSellersNames(sellers);
    }
    getSellersName();
  }, []);

  useEffect(() => {
    const filteredProducts = cart.productsInCar.filter((product) => product.qtd !== 0);
    setCarProducts(filteredProducts);
  }, [cart.productsInCar]);

  return (
    <div className="checkout-page">
      <HeaderCustomer />
      <h1>Finalizar Pedido</h1>
      <div className="checkout">
        <div className="header-details">
          <h2 className="hearder-id">Pedido7219</h2>
          <p className="hearder-seller">P Vend. Fulana de tal</p>
          <h2 className="entregue">Pendente</h2>
          <h2 className="hearder-date">13/13/2013</h2>
          <button className="header-button" type="button">Marcar como entregue</button>
        </div>
        <div className="list-titles">
          <h2 className="title-item">Item</h2>
          <h2 className="title-description">Descrição</h2>
          <h2 className="title-quantity">Quantidade</h2>
          <h2 className="title-unit-value">Valor-Unitário</h2>
          <h2 className="title-sub-total">Sub-total</h2>
        </div>
        {
          carProducts.map((product, i) => (
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
        }
        <div>
          <ButtonSD
            psize="1.5rem 2rem"
            radius="10px"
            data-testid="customer_checkout__element-order-total-price"
          >
            {`Total: R$ ${cart.totalCarPrice.toFixed(2)}`}
          </ButtonSD>
        </div>
      </div>
    </div>
  );
}