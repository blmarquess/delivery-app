import React from 'react';
import LayoutPage from '../layout/LayoutPage';
import HeaderCustomer from '../components/header/HeaderCustomer';
import ProductCard from '../components/cards/ProductCard';
import '../components/cards/generalCardUI.css';
import TotalPrice from '../components/basis/TotalPrice';

export default function CustomerProducts() {
  return (
    <LayoutPage>
      <section>
        <HeaderCustomer />
      </section>
      <section>
        <ProductCard />
        <TotalPrice />
      </section>
    </LayoutPage>
  );
}
