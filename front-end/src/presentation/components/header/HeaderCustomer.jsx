import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderCliStyle.css';

export default function Navbar() {
  return (
    <div className="div1">
      <div>
        <li className="btn-products">
          <Link to="/customer/products">Produtos</Link>
        </li>
        <li className="btn-orders">
          <Link to="/customer/orders">Meus Pedidos</Link>
        </li>
      </div>
      <div>
        <li className="btn-user">
          <p> Ciclano da Silva</p>
        </li>
        <li className="btn-exit">
          <Link to="/Login">Sair</Link>
        </li>
      </div>
    </div>
  );
}
