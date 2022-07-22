export default function formatData(oldDateFormat) {
  const arr = oldDateFormat.split('-');
  const day = arr[2].substr(0, 2);
  const month = arr[1];
  const year = arr[0];
  return `${day}/${month}/${year}`;
}
