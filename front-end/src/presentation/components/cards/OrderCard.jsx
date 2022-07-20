import React from 'react';
import { Link } from 'react-router-dom';
import './OrderCard.css';

export default function OrderCard() {
  function verifyIfIsSeller() {
    return window.location.pathname.includes('/seller/orders');
  }

  function renderAddress() {
    return (
      <div className="address">
        <p className="CEP">Endereço</p>
      </div>
    );
  }

  return (
    <Link className="order-link" to="/customer/details">
      <div className="card-order">
        <div className="card-order-box">
          <div className="order-id-box">
            <div>Pedido</div>
            <div>Id do pedido</div>
          </div>
          <div className="status entregue-card">Entregue</div>
          <div className="data-n-price">
            <div className="data">Data</div>
            <div className="data">Preço</div>
          </div>
        </div>
        {verifyIfIsSeller() ? renderAddress() : '' }
      </div>
    </Link>
  );
}
