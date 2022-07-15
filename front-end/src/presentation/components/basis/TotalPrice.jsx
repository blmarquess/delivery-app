import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Context from '../../../infra/data/contexts/Context';
import './TotalPrice.css';

export default function TotalPrice() {
  const { totalCarPrice } = useContext(Context);
  return (
    <Link to="/customer/checkout">
      <TotalPriceButton>{ `R$ ${totalCarPrice.toFixed(2)} `}</TotalPriceButton>
    </Link>
  );
}

export const TotalPriceButton = styled.button`align-self: center;
  background: ${({ bgcolor }) => bgcolor || '#036B52'};
  border: none;
  box-shadow: 0 0 0.3rem black;
  border-radius: 0.3rem;
  position: fixed;
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
  position: ${(props) => props.position || 'fixed'};
  right: ${(props) => props.right || 'none'};
  text-align: center;
  top: ${(props) => props.top || 'none'};
  width: ${(props) => props.wsize || '300px'};
`;
