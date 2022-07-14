import React from 'react';
import LayoutPage from '../layout/LayoutPage';
import HeaderCustomer from '../components/header/HeaderCustomer';
import ProductCard from '../components/cards/ProductCard';
import '../components/cards/generalCardUI.css';

const customerProducts = () => (
  <LayoutPage>
    <section>
      <HeaderCustomer />
    </section>
    <section className="UI">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  </LayoutPage>
);

export default customerProducts;
