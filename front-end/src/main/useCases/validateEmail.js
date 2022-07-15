export default function validateEmail(email) {
  const emailRole = /^[a-z0-9._-]+@[a-z0-9]+\.com$/;
  return emailRole.test(email);
}
