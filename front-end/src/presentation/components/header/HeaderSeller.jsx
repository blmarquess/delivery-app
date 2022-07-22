import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loadUserDataInLocalStorage from '../../../main/useCases/loadUserDataLocalStorage';
import logoffExecute from '../../../main/useCases/logoffExecute';
import './HeaderCliStyle.css';

export default function Navbar() {
  const [seller, setSeller] = useState(['']);
  const RedirectToPath = useNavigate();
  useEffect(() => {
    setSeller(loadUserDataInLocalStorage());
  }, []);

  function logout() {
    logoffExecute();
    return RedirectToPath('/login');
  }
  return (
    <div className="div1">
      <div>
        <li className="btn-seller-product">
          <Link to="/seller/orders">Pedidos</Link>
        </li>
      </div>
      <div>
        <li className="btn-user">
          <p>{seller.name}</p>
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
