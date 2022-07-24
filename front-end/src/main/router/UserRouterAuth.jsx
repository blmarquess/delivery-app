import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import loadUserDataLocalStorage from '../useCases/loadUserDataLocalStorage';

export default function UserRouterAuth({ roleUser }) {
  const data = loadUserDataLocalStorage();
  if (!data) { return <Navigate to="/login" replace />; }

  if (data.role !== roleUser) { return <Navigate to="/login" replace />; }

  return <Outlet />;
}

UserRouterAuth.propTypes = { roleUser: PropTypes.string.isRequired };
