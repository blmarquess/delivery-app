import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderCliStyle.css';

const navbar = () => (
  <div className="div1">
    <div>
      <li className="btn-products">
        <Link to="/customer/products">Produtos</Link>
      </li>
      <li className="btn-orders">
        <Link to="/customer/checkout">Meus Pedidos</Link>
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

export default navbar;
