export default function formatData(oldDateFormat) {
  if (!oldDateFormat) {
    return null;
  }
  const dateInUTCFormat = new Date(oldDateFormat);
  const sliceNumber = -2;
  const day = dateInUTCFormat.getDate();
  const month = (`00${dateInUTCFormat.getMonth() + 1}`).slice(sliceNumber);
  const year = dateInUTCFormat.getFullYear();
  return `${day}/${month}/${year}`;
}
