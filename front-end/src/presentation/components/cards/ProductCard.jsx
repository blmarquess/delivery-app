import React, { useEffect, useContext } from 'react';
import ProductsContext from '../../../infra/data/contexts/Context';
import { getProductsDB } from '../../../main/hooks/useHttp';
import './ProductCard.css';

export default function Products() {
  const { cart, addProducts, handleChangeInputQtd,
    addOneItemOnCart, removeOneItemOnCart } = useContext(ProductsContext);

  useEffect(() => {
    async function getAllProducts() {
      const productsDB = await getProductsDB();
      if (!cart.productsInCar || cart.productsInCar.length === 0) {
        await addProducts(productsDB);
      }
    }
    getAllProducts();
  }, [cart, addProducts]);

  return (
    <div
      className="UI"
      role="button"
      tabIndex={ 0 }
      onKeyDown={ () => {} }
    >
      {
        cart && cart.productsInCar.length > 0 && cart.productsInCar.map((product) => (
          <div key={ product.id } className="card">
            <div className="img-price">
              <p className="price">
                R$
                <span
                  data-testid={ `customer_products__element-card-price--${product.id}` }
                >
                  { `${product.price.replace('.', ',')}` }
                </span>
              </p>
              <img
                className="img"
                src={ product.url_image }
                alt={ product.name }
                data-testid={ `customer_products__img-card-bg-image--${product.id}` }
              />
            </div>
            <div className="box-counter">
              <div className="product-name">
                <p data-testid={ `customer_products__element-card-title--${product.id}` }>
                  { product.name }
                </p>
              </div>
              <div className="counter">
                <button
                  className="btn-minus"
                  data-testid={ `customer_products__button-card-rm-item--${product.id}` }
                  type="button"
                  disabled={ product.qtd < 1 }
                  onClick={ () => removeOneItemOnCart(product.id) }
                >
                  -
                </button>
                <input
                  type="text"
                  name={ product.id }
                  className="counter-number"
                  data-testid={ `customer_products__input-card-quantity--${product.id}` }
                  onChange={ ({ target: { value, name } }) => {
                    handleChangeInputQtd(name, value);
                  } }
                  value={ product.qtd }
                />
                <button
                  className="btn-plus"
                  type="button"
                  data-testid={ `customer_products__button-card-add-item--${product.id}` }
                  onClick={ () => addOneItemOnCart(product.id) }
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
