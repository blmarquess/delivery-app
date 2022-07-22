import React, { useContext, useState, useEffect } from 'react';
import Context from '../../infra/data/contexts/Context';
import { getSellersNameDB } from '../../main/hooks/useHttp';
import ButtonSD from '../components/basis/ButtonSD';
import HeaderCustomer from '../components/header/HeaderCustomer';
import './styles/CustomerCheckout.css';

export default function CustomerCheckout() {
  const {
    cart,
    removeProduct,
    listOfOrders,
    setListOfOrders,
    setCart } = useContext(Context);
  const [carProducts, setCarProducts] = useState([]);
  const [sellersNames, setSellersNames] = useState([]);
  const [checkoutState, setCheckoutState] = useState(
    { seller: '', address: '', number: '' },
  );

  function InputHandler(e) {
    setCheckoutState({ ...checkoutState, [e.name]: e.value });
  }

  function sendOrder() {
    const date = new Date();
    const { seller, address, number } = checkoutState;
    setListOfOrders([
      ...listOfOrders,
      {
        products: carProducts,
        address,
        number,
        seller,
        totalPrice: cart.totalCarPrice,
        formattedDate:
        `${((date.getDate()))}/0${((date.getMonth() + 1))}/${date.getFullYear()}`,
      },
    ]);
    setCart({
      totalCarPrice: 0,
      productsInCar: [],
    });
  }

  useEffect(() => {
    async function getSellersName() {
      const sellers = await getSellersNameDB();
      setSellersNames(sellers);
      setCheckoutState({ ...checkoutState, seller: sellers[0].name });
    }
    getSellersName();
  }, [checkoutState]);

  useEffect(() => {
    const filteredProducts = cart.productsInCar.filter((product) => product.qtd !== 0);
    setCarProducts(filteredProducts);
  }, [cart]);

  function removeFromCar(id) {
    return removeProduct(id);
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
                  `customer_checkout__element-order-table-item-number--${i}`
                }
              >
                {i + 1}
              </li>
              <li
                className="description"
                data-testid={ `customer_checkout__element-order-table-name--${i}` }
              >
                { product.name }
              </li>
              <li
                className="quantity"
                data-testid={ `customer_checkout__element-order-table-quantity--${i}` }
              >
                {product.qtd}
              </li>
              <li
                className="unit-value"
                data-testid={ `customer_checkout__element-order-table-unit-price--${i}` }
              >
                { `${product.price.replace('.', ',')}` }
              </li>
              <li
                className="sub-total"
                data-testid={ `customer_checkout__element-order-table-sub-total--${i}` }
              >
                {`${(Math.round(product.subTotal * 100) / 100)
                  .toFixed(2).replace('.', ',')}`}
              </li>
              <li className="remove-item">
                <button
                  type="button"
                  onClick={ () => removeFromCar(product.id) }
                  data-testid={ `customer_checkout__element-order-table-remove--${i}` }
                >
                  Remover
                </button>
              </li>
            </ul>
          ))
        }
        <div>
          <ButtonSD psize="1.5rem 2rem" radius="10px">
            <span>Total: R$</span>
            <span data-testid="customer_checkout__element-order-total-price">
              {cart.totalCarPrice.toFixed(2).replace('.', ',')}
            </span>
          </ButtonSD>
        </div>
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
              name="seller"
              onChange={ ({ target }) => InputHandler(target) }
            >
              {
                sellersNames.map((seller) => (
                  <option
                    key={ seller.name }
                    value={ seller.name }
                  >
                    {seller.name}
                  </option>
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
              name="address"
              onChange={ ({ target }) => InputHandler(target) }
              value={ checkoutState.address }
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
              name="number"
              onChange={ ({ target }) => InputHandler(target) }
              value={ checkoutState.number }
              data-testid="customer_checkout__input-addressNumber"
            />
          </label>
        </div>
        <button
          type="button"
          className="finish-order"
          data-testid="customer_checkout__button-submit-order"
          onClick={ sendOrder }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
      {/* <TotalPrice /> */}
    </div>
  );
}
