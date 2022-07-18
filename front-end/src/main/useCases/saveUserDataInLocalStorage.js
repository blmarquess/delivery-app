export default function saveUserDataInLocalStorage(userData) {
  localStorage.setItem('authToken', JSON.stringify(userData.token));
  localStorage.setItem('userRole', JSON.stringify(userData.role));
  localStorage.setItem('userData', JSON.stringify(userData));
}
