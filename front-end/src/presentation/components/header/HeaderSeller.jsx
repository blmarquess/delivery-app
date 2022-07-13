import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderCliStyle.css';

const navbar = () => (
  <div className="div1">
    <div>
      <li className="btn-seller-product">
        <Link to="/seller/orders">Pedidos</Link>
      </li>
    </div>
    <div>
      <li className="btn-user">
        <p>Fulana Pereira</p>
      </li>
      <li className="btn-exit">
        <Link to="/Login">Sair</Link>
      </li>
    </div>
  </div>
);

export default navbar;
