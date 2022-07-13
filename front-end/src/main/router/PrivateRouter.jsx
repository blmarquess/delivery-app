import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../infra/data/contexts/AuthContext';

export default function PrivateRouter({ children }) {
  const thisUserIsValid = useContext(AuthContext).userState;

  if (!thisUserIsValid.role) {
    return <Navigate to="/login" />;
  }

  return children;
}

PrivateRouter.propTypes = { children: PropTypes.node.isRequired };
