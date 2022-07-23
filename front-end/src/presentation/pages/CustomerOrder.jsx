import React from 'react';
import LayoutPage from '../layout/LayoutPage';
import HeaderCustomer from '../components/header/HeaderCustomer';
import OrdersBoardCustomer from '../components/cards/OrdersBoardCustomer';
import '../components/cards/OrderCard.css';

export default function CustomerOrders() {
  return (
    <LayoutPage>
      <HeaderCustomer />
      <section className="orders">
        <OrdersBoardCustomer />
      </section>
    </LayoutPage>
  );
}
