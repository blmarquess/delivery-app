export default function formatOrderNumber(saleId) {
  const sizeZero = -4;
  return (`0000${saleId}`).slice(sizeZero);
}
