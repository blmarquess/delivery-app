import { useNavigate } from 'react-router-dom';

export default function RedirectToPath(path) {
  const redirect = useNavigate();
  return redirect(path);
}
