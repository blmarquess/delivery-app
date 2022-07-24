import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import loadUserDataLocalStorage from '../useCases/loadUserDataLocalStorage';

export default function PrivateRouter() {
  const userData = loadUserDataLocalStorage();

  if (!userData.token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
