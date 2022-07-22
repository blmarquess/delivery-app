import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3001';

const useHttp = axios.create({
  baseURL: `${BACKEND_URL}:${BACKEND_PORT}` || 'http://localhost:3001',
});

export default useHttp;

export function useHttpGet(url) {
  const http = useHttp();
  return http.get(url);
}

export async function getProductsDB() {
  const products = await useHttp.get('/products');
  return products.data;
}

export async function getSellersNameDB() {
  const sellers = await useHttp.get('/sellers');
  return sellers.data.users.map(({ id, name }) => ({ id, name }));
}

export async function sendOrderToDB(order) {
  const response = await useHttp.post('/sales', order);
  return response;
}
