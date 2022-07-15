import useHttp from '../hooks/useHttp';

export default async function getProductsDB() {
  const products = await useHttp.get('/products');
  return products.data;
}
