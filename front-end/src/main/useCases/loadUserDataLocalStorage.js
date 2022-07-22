export default function loadUserDataInLocalStorage() {
  const data = localStorage.getItem('user');
  if (data) {
    return JSON.parse(data);
  } return {};
}
