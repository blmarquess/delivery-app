import React from 'react';

export default function Header() {
  return (
    <div className="div1">
      <li className="btn-products">
        <button type="button" onClick={ console.log('/customer/products') }>
          Produtos
        </button>
      </li>
    </div>
  );
}
