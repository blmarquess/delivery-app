import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRouter() {
  const userData = JSON.parse(localStorage.getItem('user'));

  if (!userData.token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
