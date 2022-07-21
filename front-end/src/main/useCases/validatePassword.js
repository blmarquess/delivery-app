export default function validatePassword(password) {
  const PSW_MIN = 6;
  if (!password) {
    console.log('if false');
    return false;
  }
  console.log('test', password.length > PSW_MIN);
  return password.length >= PSW_MIN;
}
