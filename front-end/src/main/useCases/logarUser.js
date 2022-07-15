import useHttp from '../hooks/useHttp';

export default async function logarUser(email, password) {
  const execLogin = await useHttp.post('/login', { email, password });
  return execLogin;
}
