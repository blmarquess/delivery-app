import useHttp from '../hooks/useHttp';

export default async function logarUser(email, password) {
  const execLogin = await useHttp.post('/login', { email, password })
    .then(({ data, status }) => ({ data, status }))
    .catch((error) => error.response.status);
  return execLogin;
}
