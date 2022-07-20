export default function (product) {
  return {
    ...product,
    qtd: 0,
    subTotal: 0,
  };
}
