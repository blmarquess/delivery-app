import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Context from '../../../infra/data/contexts/Context';
import './TotalPrice.css';

export default function TotalPrice() {
  const { cart } = useContext(Context);
  return (
    <Link to="/customer/checkout">
      <TotalPriceButton
        data-testid={ window.location.pathname.includes('/customer/checkout')
          ? 'customer_checkout__element-order-total-price'
          : 'customer_products__button-cart' }
        disabled={ cart.totalCarPrice === 0 }
      >
        R$
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {
            `${(Math.round(cart.totalCarPrice * 100) / 100).toFixed(2).replace('.', ',')}`
          }
        </span>
      </TotalPriceButton>
      TotalPriceButton
    </Link>
  );
}

export const TotalPriceButton = styled.button`align-self: center;
  background: ${({ bgcolor }) => bgcolor || '#036B52'};
  border: none;
  box-shadow: 0 0 0.3rem black;
  border-radius: 0.3rem;
  position: ${(props) => (props.position ? 'relative' : 'fixed')};
  bottom: ${(props) => props.bottom || '5%'};
  color: ${({ textcolor }) => textcolor || 'white'};
  cursor: pointer;
  font-size: ${({ fontesize }) => fontesize || '22px'};
  font-weight: 600;
  height: 70px;
  left: ${(props) => props.left || '80%'};
  margin: ${(props) => props.msize || '0'};
  outline: none;
  padding: 0 1rem;
  right: ${(props) => props.right || 'none'};
  text-align: center;
  top: ${(props) => props.top || 'none'};
  width: ${(props) => props.wsize || '300px'};
`;
