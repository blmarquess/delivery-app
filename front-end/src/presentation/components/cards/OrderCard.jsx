import React from 'react';
import './OrderCard.css';

export default function OrderCard() {
  return (
    <div className="card-order">
      <div className="card-order-box">
        <div className="order-id-box">
          <div>Pedido</div>
          <div>Id do pedido</div>
        </div>
        <div className="status preparando">Entregue</div>
        <div className="data-n-price">
          <div className="data">Data</div>
          <div className="data">Preço</div>
        </div>
      </div>
      <div className="address">
        <p className="CEP">Endereço</p>
      </div>
    </div>
  );
}
