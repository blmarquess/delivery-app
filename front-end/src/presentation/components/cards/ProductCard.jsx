import React, { useEffect, useState, useContext } from 'react';
import Context from '../../../infra/data/contexts/Context';
import { getProductsDB } from '../../../main/hooks/useHttp';
import './ProductCard.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addCartItem, removeCartItem, Cart } = useContext(Context);

  useEffect(() => {
    async function getAllProducts() {
      const productsDB = await getProductsDB();
      setProducts(productsDB);
    }
    getAllProducts();
  }, []);

  function removeFromCar(product) {
    return removeCartItem(product.id);
  }

  function addToCar(product) {
    return addCartItem(product);
  }

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
                <button
                  className="btn-minus"
                  type="button"
                  disabled={ !Cart?.productsInCar.length < 1 }
                  onClick={ () => removeFromCar(product) }
                >
                  -
                </button>
                <p className="counter-number">0</p>
                <button
                  className="btn-plus"
                  type="button"
                  onClick={ () => addToCar(product) }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}
