export default function saveUserDataInLocalStorage() {
  const data = localStorage.getItem('user');
  if (data) {
    return JSON.parse();
  } return {};
}
