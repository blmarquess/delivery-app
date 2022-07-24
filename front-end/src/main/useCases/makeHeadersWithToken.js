import loadUserDataLocalStorage from './loadUserDataLocalStorage';

export default function makeHeadersWithToken() {
  const { token } = loadUserDataLocalStorage('user');
  const headers = { 'Content-Type': 'application/json', Authorization: token };
  return headers;
}
