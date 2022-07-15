import React, { useContext } from 'react';
import Context from '../../main/context/Context';
import TotalPrice from '../components/basis/TotalPrice';
import HeaderCustomer from '../components/header/HeaderCustomer';
import './styles/CustomerCheckout.css';

export default function CustomerCheckout() {
  const { productsInCar } = useContext(Context);

  return (
    <div className="checkout-page">
      <HeaderCustomer />
      <h1>Finalizar Pedido</h1>
      <table className="checkout-table">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          {
            productsInCar.map((product) => (
              <tr key={ product.id } className="checkout-product">
                <td className="item">1</td>
                <td className="description">{ product.name }</td>
                <td className="quantity">asdasd</td>
                <td className="unit-value">{ `R$ ${product.price}` }</td>
                <td className="sub-total">asdddd</td>
                <td className="remove-item">
                  <button type="button">Remover</button>
                </td>
              </tr>
            ))
          }
        </tbody>
        <TotalPrice />
      </table>
    </div>
  );
}
