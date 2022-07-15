import React from 'react';
import redirectToPath from '../../../main/useCases/redirectToPath';

export default function Header() {
  return (
    <div className="div1">
      <li className="btn-products">
        <button type="button" onClick={ redirectToPath('/customer/products') }>
          Produtos
        </button>
      </li>
    </div>
  );
}
