import axios from 'axios';
import makeHeadersWithToken from '../useCases/makeHeadersWithToken';

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

// export async function getHttpWithTokenOnHeaders(path) {
//   const headers = makeHeadersWithToken();
//   const { data } = await useHttp.get(path, { headers });
//   return data;
// }

// export async function postHttpWithTokenOnHeaders(path, body) {
//   const headers = makeHeadersWithToken();
//   const { data } = await useHttp.get(path, body, { headers });
//   return data;
// }

export async function getProductsDB() {
  const products = await useHttp.get('/products');
  return products.data;
}

export async function getSellersNameDB() {
  const sellers = await useHttp.get('/sellers');
  return sellers.data.sellers.map(({ id, name }) => ({ id, name }));
}

export async function getSellerNameById(id) {
  const sellers = await getSellersNameDB();
  const actualSellerOrder = await sellers.find((seller) => seller.id === id);
  return actualSellerOrder.name;
}

export async function sendOrderToDB(body) {
  const headers = makeHeadersWithToken();
  const response = await useHttp.post('/sales', body, { headers });
  return response;
}

export async function getOrders() {
  const orders = await useHttp.get('/sales');
  return orders.data;
}

export async function getOrderById(id) {
  const headers = makeHeadersWithToken();
  const order = await useHttp.get(`/sales/customer/${id}`, { headers });
  return order;
}

export async function getSellerOrderById(id) {
  const headers = makeHeadersWithToken();
  const order = await useHttp.get(`/sales/seller/${id}`, { headers });
  return order;
}
