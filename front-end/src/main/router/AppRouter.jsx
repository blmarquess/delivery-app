import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PrivateRouter from './PrivateRouter';
import UserRouterAuth from './UserRouterAuth';

import Login from '../../presentation/pages/Login';
import Register from '../../presentation/pages/Register';
import CustomerProducts from '../../presentation/pages/CustomerProducts';
import SellerOrder from '../../presentation/pages/SellerOrders';
import AdminUsers from '../../presentation/pages/AdminUsers';
import CustomerCheckout from '../../presentation/pages/CustomerCheckout';
import CustomerOrders from '../../presentation/pages/CustomerOrder';
import CustomerOrderDetails from '../../presentation/pages/CustomerOrderDetails';
import SellerOrderDetails from '../../presentation/pages/SellerOrderDetails';

export default function AppRouter() {
  return (
    <Routes>
      <Route index path="/" element={ <Navigate to="/login" /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />

      <Route exact path="/" element={ <PrivateRouter /> }>
        <Route path="/customer" element={ <UserRouterAuth roleUser="customer" /> }>
          <Route index element={ <Navigate to="products" /> } />
          <Route path="checkout" element={ <CustomerCheckout /> } />
          <Route path="products" element={ <CustomerProducts /> } />
          <Route path="orders" element={ <CustomerOrders /> } />
          <Route path="orders/:id" element={ <CustomerOrderDetails /> } />
        </Route>

        <Route path="/seller" element={ <UserRouterAuth roleUser="seller" /> }>
          <Route index element={ <Navigate to="orders" /> } />
          <Route path="orders" element={ <SellerOrder /> } />
          <Route path="orders/:id" element={ <SellerOrderDetails /> } />
        </Route>

        <Route path="/admin" element={ <UserRouterAuth roleUser="administrator" /> }>
          <Route index element={ <Navigate to="users" /> } />
          <Route path="users" element={ <AdminUsers /> } />
        </Route>
      </Route>

      <Route path="*" element={ <h1>404 | Pagina não encontrada</h1> } />
    </Routes>
  );
}
