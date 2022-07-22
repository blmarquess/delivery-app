import React from 'react';
import LayoutPage from '../layout/LayoutPage';
import HeaderSeller from '../components/header/HeaderSeller';
import OrderCardSeller from '../components/cards/OrderCardSeller';
import '../components/cards/OrderCard.css';

const sellerOrder = () => (
  <LayoutPage>
    <section>
      <HeaderSeller />
    </section>
    <section className="orders">
      <OrderCardSeller />
    </section>
  </LayoutPage>
);

export default sellerOrder;
