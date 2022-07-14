import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRouter from './PrivateRouter';
import UserRouterAuth from './UserRouterAuth';

import Login from '../../presentation/pages/Login';
import Register from '../../presentation/pages/Register';
import CustomerProducts from '../../presentation/pages/CustomerProducts';
import SellerOrder from '../../presentation/pages/SellerOrders';
import AdminUsers from '../../presentation/pages/AdminUsers';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <PrivateRouter /> }>

        <Route path="/customer" element={ <UserRouterAuth roleUser="customer" /> }>
          <Route index path="products" element={ <CustomerProducts /> } />
          <Route path="orders" element={ <h1>orders</h1> } />
        </Route>

        <Route path="/seller" element={ <UserRouterAuth roleUser="seller" /> }>
          <Route index path="orders" element={ <SellerOrder /> } />
        </Route>

        <Route path="/admin" element={ <UserRouterAuth roleUser="admin" /> }>
          <Route index path="users" element={ <AdminUsers /> } />
        </Route>

      </Route>

      <Route path="*" element={ <h1>404 | Pagina não encontrada</h1> } />
    </Routes>
  );
}
