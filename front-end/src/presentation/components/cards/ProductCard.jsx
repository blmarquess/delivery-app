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
    <div className="UI">
      {
        cart?.productsInCar.map((product) => (
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
                  disabled={ product.qtd < 1 }
                  onClick={ () => removeOneItemOnCart(product.id) }
                >
                  -
                </button>
                <input
                  type="text"
                  name={ product.id }
                  className="counter-number"
                  onChange={ async ({ target: { value, name } }) => {
                    await handleChangeInputQtd(name, value);
                    console.log(value, name);
                  } }
                  value={ product.qtd }
                />
                <button
                  className="btn-plus"
                  type="button"
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
