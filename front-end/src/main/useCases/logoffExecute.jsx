import redirectToPath from './redirectToPath';

export default function logoffExecute() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userRole');
  localStorage.removeItem('userData');
  return redirectToPath('/login');
}
