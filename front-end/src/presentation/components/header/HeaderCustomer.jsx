/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loadUserDataInLocalStorage from '../../../main/useCases/loadUserDataLocalStorage';
import './HeaderCliStyle.css';
import logoffExecute from '../../../main/useCases/logoffExecute';

export default function Navbar() {
  const [customer, setCustomer] = useState('');
  const RedirectToPath = useNavigate();
  useEffect(() => {
    setCustomer(loadUserDataInLocalStorage());
  }, []);

  function logout() {
    logoffExecute();
    return RedirectToPath('/login');
  }
  return (
    <div className="div1">
      <div>
        <li
          data-testid="customer_products__element-navbar-link-products"
          className="btn-products"
        >
          <Link to="/customer/products">Produtos</Link>
        </li>
        <li
          className="btn-orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <Link to="/customer/orders">Meus Pedidos</Link>
        </li>
      </div>
      <div>
        <li
          className="btn-user"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          <p>{customer.name}</p>
        </li>
        <li className="btn-exit">
          <button
            type="button"
            onClick={ logout }
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </button>
        </li>
      </div>
    </div>
  );
}
