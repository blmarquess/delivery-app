import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

// import App from '../../App';
import Home from '../../presentation/pages/Home';
import Login from '../../presentation/pages/Login';

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> }>
        <Route path="/login" element={ <Login /> } />
        <Route index element={ <Home /> } />
        <Route path="/home" element={ <Home /> }>
          <Route path=":pedidoId" element="<Team />" />
          <Route path="novo-pedido" element="<NewTeamForm />" />
          <Route index element="<LeagueStandings />" />
        </Route>
        <Route path="*" element={ <h1>404 | Pagina não encontrada</h1> } />
      </Route>
    </Routes>
  );
}
