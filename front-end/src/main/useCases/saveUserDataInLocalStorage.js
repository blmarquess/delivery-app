export default function saveUserDataInLocalStorage(userData) {
  localStorage.setItem('user', JSON.stringify(userData));
}
