import useHttp from '../hooks/useHttp';

export default async function logarUser(username, password) {
  const execLogin = await useHttp.post('/login', { username, password });
  return execLogin;
}
