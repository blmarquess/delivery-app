import RedirectToPath from './redirectToPath';

export default function logoffExecute() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userRole');
  localStorage.removeItem('userData');
  return RedirectToPath('/login');
}
