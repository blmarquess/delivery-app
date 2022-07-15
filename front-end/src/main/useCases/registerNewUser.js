import useHttp from '../hooks/useHttp';

export default async function registerNewUser(email, password, name) {
  const execLogin = await useHttp.post('/register', { email, password, name });
  return execLogin;
}
