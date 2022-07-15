import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './main/styles/global';
import './index.css';
import AppRouter from './main/router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './infra/data/contexts/AuthProvider';
import ContextProvider from './main/context/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle />
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
