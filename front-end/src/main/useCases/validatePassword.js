export default function validatePassword(password) {
  const PSW_MIN = 6;
  if (!password) {
    return false;
  }
  return password.length >= PSW_MIN;
}
