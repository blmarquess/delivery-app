import { createContext } from 'react';

export const initialStateAuth = {
  username: '',
  id: '',
  token: '',
  role: '',
};

const AuthContext = createContext(initialStateAuth);

export default AuthContext;
