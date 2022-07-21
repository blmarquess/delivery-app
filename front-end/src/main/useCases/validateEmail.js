export default function validateEmail(email) {
  const emailRole = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  return emailRole.test(email);
}
