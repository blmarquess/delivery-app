import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './main/styles/global';
import systemTheme from './main/styles/systemTheme';
import AppRouter from './main/router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './infra/data/contexts/AuthProvider';
import ContextProvider from './infra/data/contexts/ContextProvider';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={systemTheme}>
      <ContextProvider>
        <AuthProvider>
          <BrowserRouter>
            <GlobalStyle />
            <AppRouter />
          </BrowserRouter>
        </AuthProvider>
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
