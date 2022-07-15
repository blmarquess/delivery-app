import { useNavigate } from 'react-router-dom';

const redirect = useNavigate();

export default function logoffExecute() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userRole');
  localStorage.removeItem('userData');
  return redirect('/login');
}
