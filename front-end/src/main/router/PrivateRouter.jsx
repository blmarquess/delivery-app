import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRouter({ children }) {
  const thisUserIsValid = false;

  if (!thisUserIsValid) {
    return <Navigate to="/login" />;
  }

  return children;
}

PrivateRouter.propTypes = { children: PropTypes.node.isRequired };
