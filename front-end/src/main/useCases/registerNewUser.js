import useHttp from '../hooks/useHttp';

export default async function registerNewUser(email, password, name) {
  const execLogin = await useHttp.post('/users', { email, password, name })
    .then(({ data, status }) => ({ data, status }))
    .catch((error) => error.response.status);
  return execLogin;
}
