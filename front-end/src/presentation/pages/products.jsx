import React, { useEffect, useState } from 'react';
import { getProductsDB } from '../../main/hooks/useHttp';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getAllProducts() {
      const productsDB = await getProductsDB();
      setProducts(productsDB);
    }
    getAllProducts();
  }, []);

  return (
    <div>
      {
        products.map((product) => (
          <div key={ product.id }>
            <h1>{ product.name }</h1>
            <h3>{ `Preço: R$${product.price}` }</h3>
            <img src={ product.url_image } alt="" />
          </div>
        ))
      }
    </div>
  );
}
