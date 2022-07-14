import React, { useEffect, useState } from 'react';
import { getProductsDB } from '../../../main/hooks/useHttp';
import './ProductCard.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getAllProducts() {
      const productsDB = await getProductsDB();
      setProducts(productsDB);
    }
    getAllProducts();
  }, []);

  return (
    <div className="UI">
      {
        products.map((product) => (
          <div key={ product.id } className="card">
            <div className="img-price">
              <p className="price">{ product.price }</p>
              <img className="img" src={ product.url_image } alt="cerva" />
            </div>
            <div className="box-counter">
              <div className="product-name">
                <p>
                  { product.name }
                </p>
              </div>
              <div className="counter">
                <button className="btn-minus" type="button">-</button>
                <p className="counter-number">0</p>
                <button className="btn-plus" type="button">+</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Products;
