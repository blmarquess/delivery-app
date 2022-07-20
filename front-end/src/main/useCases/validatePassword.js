export default function validatePassword(password = 'p') {
  const PSW_MIN = 6;
  return password.length > PSW_MIN;
}
