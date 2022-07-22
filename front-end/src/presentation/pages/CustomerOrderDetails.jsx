// import React, { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Context from '../../infra/data/contexts/Context';
// import { getSellersNameDB, getOrderDetail } from '../../main/hooks/useHttp';
// import ButtonSD from '../components/basis/ButtonSD';
// import HeaderCustomer from '../components/header/HeaderCustomer';
// import './styles/CustomerCheckout.css';
// import './styles/CustomerOrderDetails.css';

// export default function CustomerCheckout() {
//   const { cart, listOfOrders, selectedOrder } = useContext(Context);
//   const [order, setOrder] = React.useState({});
//   const [sellerName, setSellerName] = React.useState('');

//   const location = useParams();

//   useEffect(() => {
//     async function getSellersName() {
//       const sellers = await getSellersNameDB();
//       const orderResponse = await getOrderDetail();
//       setOrder(orderResponse.find(({ id }) => id === Number(location.id)));
//       setSellerName(sellers.find((seller) => seller.id === order.sellerId));
//     }
//     getSellersName();
//   }, []);
//   return (
//     <div className="checkout-page">
//       <HeaderCustomer />
//       <h1>Detalhe do Pedido</h1>
//       <div className="checkout">
//         <div className="header-details">
//           <h2
//             className="hearder-id"
//             data-tested="customer_order_details__element-order-details-label-order-id"
//           >
//             {`Pedido 00${selectedOrder + 1}`}
//           </h2>
//           <p
//             className="hearder-seller"
//             data-tested="customer_order_details__element-order-details-label-seller-name"
//           >
//             {`P. Vend: ${sellerName.name}`}
//           </p>
//           <h2
//             className="entregue"
//             data-tested="
//             `customer_order_details__element-order-details-label-delivery-status`
//             "
//           >
//             Pendente
//           </h2>
//           <h2
//             className="hearder-date"
//             data-tested="customer_order_details__element-order-details-label-order-date"
//           >
//             13/13/2013
//           </h2>
//           <button className="header-button" type="button">Marcar como entregue</button>
//         </div>
//         <div className="list-titles">
//           <h2 className="title-item">Item</h2>
//           <h2 className="title-description">Descrição</h2>
//           <h2 className="title-quantity">Quantidade</h2>
//           <h2 className="title-unit-value">Valor-Unitário</h2>
//           <h2 className="title-sub-total">Sub-total</h2>
//         </div>

//         <ul className="products-list">
//           <li
//             className="item"
//             data-testid={
//               `customer_order_details__element-order-table-item-number--${i}`
//             }
//           >
//             1
//           </li>
//           <li
//             className="description"
//             data-testid={ `customer_order_details__element-order-table-name--${i}` }
//           >
//             { order.name }
//           </li>
//           <li
//             className="quantity"
//             data-testid={
//               `customer_order_details__element-order-table-quantity--${i}`
//             }
//           >
//             { order.quantity }
//           </li>
//           <li
//             className="unit-value"
//             data-testid={
//               `customer_order_details__element-order-table-unit-price--${i}`
//             }
//           >
//             { `R$ ${product.price}` }
//           </li>
//           <li
//             className="sub-total"
//             data-testid={
//               `customer_order_details__element-order-table-sub-total--${i}`
//             }
//           >
//             { `R$ ${product.subTotal.toFixed(2)}` }
//           </li>
//         </ul>

//         <div>
//           <ButtonSD
//             psize="1.5rem 2rem"
//             radius="10px"
//             data-testid="customer_order_details__element-order-total-price"
//           >
//             {`Total: R$ ${cart.totalCarPrice.toFixed(2)}`}
//           </ButtonSD>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function CustomerCheckout() {
  return (
    <p>ARRIBA</p>
  );
}
