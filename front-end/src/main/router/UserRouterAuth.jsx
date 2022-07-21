import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function UserRouterAuth({ roleUser }) {
  const data = localStorage.getItem('user');
  const userData = JSON.parse(data);
  if (!userData) { return <Navigate to="/login" replace />; }

  if (userData.role !== roleUser) { return <Navigate to="/login" replace />; }

  return <Outlet />;
}

UserRouterAuth.propTypes = { roleUser: PropTypes.string.isRequired };
