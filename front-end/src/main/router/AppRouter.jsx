import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from '../../App';
import Home from '../../presentation/pages/Home';
import Login from '../../presentation/pages/Login';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login /> }>
          <Route path="/login" element={ <App /> } />
          <Route index element={ <Home /> } />
          <Route path="pedido" element={ <App /> }>
            <Route path=":pedidoId" element="<Team />" />
            <Route path="novo-pedido" element="<NewTeamForm />" />
            <Route index element="<LeagueStandings />" />
          </Route>
          <Route path="*" element={ <h1>404 | Pagina não encontrada</h1> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
