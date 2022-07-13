import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => (
  <div className="div1">
    <div>
      <li className="btn-admin-users">
        <Link to="/admin/users">Gerenciar Usuários</Link>
      </li>
    </div>
    <div>
      <li className="btn-user">
        <p>Trybeer Admin</p>
      </li>
      <li className="btn-exit">
        <Link to="/Login">Sair</Link>
      </li>
    </div>
  </div>
);

export default navbar;
