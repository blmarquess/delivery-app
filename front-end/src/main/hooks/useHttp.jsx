import axios from 'axios';
import productsMock from '../../tests/mocks/productsMock';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost';
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || '3000';

const useHttp = axios.create({
  baseURL: `${BACKEND_URL}:${BACKEND_PORT}` || 'http://localhost:3000',
});

export default useHttp;

export function useHttpGet(url) {
  const http = useHttp();
  return http.get(url);
}

export function getProductsDB() {
  return productsMock;
}
