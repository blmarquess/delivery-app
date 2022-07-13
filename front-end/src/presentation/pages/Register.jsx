import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LayoutPage from '../layout/LayoutPage';
import Input from '../components/basis/Input';
import ButtonSD from '../components/basis/ButtonSD';

const Register = () => {
  const [registerState, setInfRegister] = useState({
    userName: '', email: '', psw: '', redirect: false });
  const stateUpdate = (e) => setInfRegister({ ...registerState, [e.name]: e.value });

  const PSW_MIN = 6;
  const FULL_NAME = 12;
  const regex = /^[a-z0-9._-]+@[a-z0-9]+\.com$/;
  const isValidForm = () => registerState.psw.length > PSW_MIN
    && regex.test(registerState.email) && registerState.userName.length > FULL_NAME;

  return (
    <LayoutPage>
      <h1>Cadastro</h1>
      <section>
        <span>Nome</span>
        <Input
          type="name"
          name="userName"
          data-testid="common_register__input-name"
          wsize="100%"
          onChange={ ({ target }) => stateUpdate(target) }
        />
        <span>Email</span>
        <Input
          type="email"
          name="email"
          data-testid="common_register__input-email"
          wsize="100%"
          value={ registerState.user }
          onChange={ ({ target }) => stateUpdate(target) }
        />
        <span>Senha</span>
        <Input
          type="password"
          name="psw"
          data-testid="common_register__input-password"
          wsize="100%"
          onChange={ ({ target }) => stateUpdate(target) }
        />
        <Link to="/customer/products">
          <ButtonSD
            wsize="100%"
            msize="20px 0 0 0"
            data-testid="common_register__button-register"
            disabled={ !isValidForm() }
          >
            Cadastrar
          </ButtonSD>
        </Link>
      </section>
    </LayoutPage>
  );
};

export default Register;
