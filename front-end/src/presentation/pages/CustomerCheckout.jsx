import React, { useContext, useState, useEffect } from 'react';
import Context from '../../infra/data/contexts/Context';
import { getSellersNameDB } from '../../main/hooks/useHttp';
import TotalPrice from '../components/basis/TotalPrice';
import HeaderCustomer from '../components/header/HeaderCustomer';
import './styles/CustomerCheckout.css';

export default function CustomerCheckout() {
  const { cart, removeCartItem } = useContext(Context);
  const [carProducts, setCarProducts] = useState([]);
  const [sellersNames, setSellersNames] = useState([]);

  useEffect(() => {
    async function getSellersName() {
      const sellers = await getSellersNameDB();
      setSellersNames(sellers);
    }
    getSellersName();
  }, []);

  useEffect(() => {
    setCarProducts(cart.productsInCar);
  }, [cart]);

  function removeFromCar(id) {
    return removeCartItem(id);
  }
  return (
    <div className="checkout-page">
      <HeaderCustomer />
      <h1>Finalizar Pedido</h1>
      <div className="checkout">
        <div className="list-titles">
          <h2 className="title-item">Item</h2>
          <h2 className="title-description">Descrição</h2>
          <h2 className="title-quantity">Quantidade</h2>
          <h2 className="title-unit-value">Valor-Unitário</h2>
          <h2 className="title-sub-total">Sub-total</h2>
          <h2 className="title-remove">Remover</h2>
        </div>
        {
          carProducts.map((product, i) => (
            <ul key={ product.name } className="products-list">
              <li
                className="item"
                data-testid={
                  `customer_checkout__element-order-table-item-number-<${i}>`
                }
              >
                1
              </li>
              <li
                className="description"
                data-testid={ `customer_checkout__element-order-table-name-<${i}>` }
              >
                { product.name }
              </li>
              <li
                className="quantity"
                data-testid={ `customer_checkout__element-order-table-quantity-<${i}>` }
              >
                asdasd
              </li>
              <li
                className="unit-value"
                data-testid={ `customer_checkout__element-order-table-unit-price-<${i}>` }
              >
                { `R$ ${product.price}` }
              </li>
              <li
                className="sub-total"
                data-testid={ `customer_checkout__element-order-table-sub-total-<${i}>` }
              >
                asdddd
              </li>
              <li className="remove-item">
                <button
                  type="button"
                  onClick={ () => removeFromCar(product.id) }
                  data-testid={ `customer_checkout__element-order-table-remove-<${i}>` }
                >
                  Remover
                </button>
              </li>
            </ul>
          ))
        }
      </div>
      <h1>Detalhes e Endereço para Entrega</h1>
      <div className="address-details">
        <div className="info-inputs">
          <label htmlFor="seller">
            <h3>P. Vendedora Responsável</h3>
            <select
              className="seller-select"
              id="seller"
              data-testid="customer_checkout__select-seller"
            >
              {
                sellersNames.map((seller) => (
                  <option key={ seller.name } value={ seller.name }>{seller.name}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="address">
            <h3>Endereço</h3>
            <input
              className="address-input"
              type="text"
              id="address"
              placeholder="Rua Churosbangos Churosbagos"
              data-testid="customer_checkout__input-address"
            />
          </label>
          <label htmlFor="number">
            <h3>Número</h3>
            <input
              className="input-number"
              type="text"
              id="number"
              data-testid="customer_checkout__input-addressNumber"
            />
          </label>
        </div>
        <button
          type="button"
          className="finish-order"
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </div>
      <TotalPrice />
    </div>
  );
}
