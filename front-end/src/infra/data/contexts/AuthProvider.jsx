import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';
import useHttp from '../../../main/hooks/useHttp';

export default function AuthProvider({ children }) {
  const [userState, setUser] = useState(null);
  const dataApi = useHttp;

  useEffect(() => {
    const validateUser = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        const userInfos = await dataApi.post('/validate', { token });
        localStorage.setItem('authToken', userInfos.token);
        return setUser((prevState) => ({ ...prevState, role: userInfos.data }));
      }
    };
    validateUser();
  }, [dataApi]);

  const login = (user) => setUser((prevState) => ({ ...user, ...prevState }));

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={ { userState, login, logout } }>
      { children }
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = { children: PropTypes.node.isRequired };
