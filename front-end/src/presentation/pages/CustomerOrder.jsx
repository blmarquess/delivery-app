import React from 'react';
import LayoutPage from '../layout/LayoutPage';
import HeaderCustomer from '../components/header/HeaderCustomer';
import OrderCard from '../components/cards/OrderCard';
import '../components/cards/OrderCard.css';

export default function CustomerOrders() {
  return (
    <LayoutPage>
      <section>
        <HeaderCustomer />
      </section>
      <section className="orders">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </section>
    </LayoutPage>
  );
}
