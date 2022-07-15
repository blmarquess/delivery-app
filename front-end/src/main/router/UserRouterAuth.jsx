import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function UserRouterAuth({ roleUser }) {
  const userRole = localStorage.getItem('userRole');

  if (!userRole) { return <Navigate to="/login" replace />; }

  if (JSON.parse(userRole) !== roleUser) { return <Navigate to="/login" replace />; }

  return <Outlet />;
}

UserRouterAuth.propTypes = { roleUser: PropTypes.string.isRequired };
