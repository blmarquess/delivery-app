import { useNavigate } from 'react-router-dom';

const redirect = useNavigate();

export default function redirectToPath(path) {
  return redirect(path, { replace: true });
}
