import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';

export default function AuthProvider({ children }) {
  const [userState, setUser] = useState(null);

  const login = (user) => setUser((prevState) => ({ ...user, ...prevState }));

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={ { userState, login, logout } }>
      { children }
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = { children: PropTypes.node.isRequired };
