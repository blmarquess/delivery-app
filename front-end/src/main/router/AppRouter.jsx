import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PrivateRouter from './PrivateRouter';

import Home from '../../presentation/pages/Home';
import Login from '../../presentation/pages/Login';
import Register from '../../presentation/pages/Register';
import CustomerProducts from '../../presentation/pages/customerProducts';
import SellerOrder from '../../presentation/pages/sellerOrders';
import AdminUsers from '../../presentation/pages/adminUsers';
import Products from '../../presentation/pages/products';

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
      <Route path="/seller/orders" element={ <SellerOrder /> } />
      <Route path="/admin/users" element={ <AdminUsers /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/products" element={ <Products /> } />
      <Route
        path="/home"
        element={
          <PrivateRouter>
            <Home />
          </PrivateRouter>
        }
      />
      {/* <Route path=":pedidoId" element="<Team />" />
      <Route path="novo-pedido" element="<NewTeamForm />" /> */}
      <Route path="*" element={ <h1>404 | Pagina não encontrada</h1> } />
    </Routes>
  );
}
