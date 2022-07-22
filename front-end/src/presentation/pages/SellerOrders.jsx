import React from 'react';
import LayoutPage from '../layout/LayoutPage';
import HeaderSeller from '../components/header/HeaderSeller';
import OrderCard from '../components/cards/OrderCard';
import '../components/cards/OrderCard.css';

const sellerOrder = () => (
  <LayoutPage>
    <section>
      <HeaderSeller />
    </section>
    <section className="orders">
      <OrderCard />
    </section>
  </LayoutPage>
);

export default sellerOrder;
