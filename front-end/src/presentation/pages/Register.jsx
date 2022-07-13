import React from 'react';
import { Link } from 'react-router-dom';

import LayoutPage from '../layout/LayoutPage';
import Input from '../components/basis/Input';
import ButtonSD from '../components/basis/ButtonSD';

const Register = () => {
  return (
    // <h1>Cadastro</h1>
    <LayoutPage>
      <section>
        <span>Nome</span>
        <Input />
        <span>Nome</span>
        <Input />
        <span>Nome</span>
        <Input />
        <Link to="./home">
          <ButtomSD>
            Cadastrar
          </ButtomSD>
        </Link>
      </section>
    </LayoutPage>
  );
};
