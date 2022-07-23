import React from 'react';
import LayoutPage from '../layout/LayoutPage';
import HeaderSeller from '../components/header/HeaderSeller';
import OrdersBoardSeller from '../components/cards/OrdersBoardSeller';
import '../components/cards/OrderCard.css';

const sellerOrder = () => (
  <LayoutPage>
    <HeaderSeller />
    <section className="orders">
      <OrdersBoardSeller />
    </section>
  </LayoutPage>
);

export default sellerOrder;
