import React, { useContext } from 'react';
import Context from '../../../main/context/Context';
import './TotalPrice.css';

export default function TotalPrice() {
  const { totalCarPrice } = useContext(Context);
  return (
    <div className="total-price">{`R$ ${totalCarPrice.toFixed(1)}`}</div>
  );
}
