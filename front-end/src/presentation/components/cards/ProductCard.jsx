import React, { useEffect, useState, useContext } from 'react';
import Context from '../../../main/context/Context';
import { getProductsDB } from '../../../main/hooks/useHttp';
import './ProductCard.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const {
    totalCarPrice,
    setTotalCarPrice,
    setProductsInCar,
  } = useContext(Context);

  useEffect(() => {
    async function getAllProducts() {
      const productsDB = await getProductsDB();
      setProducts(productsDB);
    }
    getAllProducts();
  }, []);

  useEffect(() => {
    if (totalCarPrice < 0) {
      setTotalCarPrice(0);
    }
  }, [setTotalCarPrice, totalCarPrice]);

  function removeFromCar(product) {
    setTotalCarPrice((prev) => prev - parseFloat(product.price));
  }

  function addToCar(product) {
    setTotalCarPrice((prev) => prev + parseFloat(product.price));
    setProductsInCar((prev) => [...prev, product]);
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
                  disabled={ totalCarPrice <= 0 }
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
};

export default Products;
