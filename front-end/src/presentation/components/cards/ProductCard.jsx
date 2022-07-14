import React from 'react';
import './ProductCard.css';

const ProductCard = () => (
  <div>
    <div className="card">
      <div className="img-price">
        <p className="price">Preço</p>
        <img className="img" src="https://s3-sa-east-1.amazonaws.com/bluesoft-erp/krill/ecommerce/produtos/fotos/7531f9ab-f29d-40d1-aed6-9c29c7fbbd1c/foto_product.jpg" alt="cerva" />
      </div>
      <div className="box-counter">
        <div className="product-name">
          <p>
            Descrição
          </p>
        </div>
        <div className="counter">
          <button className="btn-minus" type="button">-</button>
          <p className="counter-number">0</p>
          <button className="btn-plus" type="button">+</button>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;

// wqeuqywieuwey
