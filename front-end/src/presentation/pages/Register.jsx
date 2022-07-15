import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LayoutPage from '../layout/LayoutPage';
import Input from '../components/basis/Input';
import ButtonSD from '../components/basis/ButtonSD';
import registerNewUser from '../../main/useCases/registerNewUser';

const Register = () => {
  const [registerState, setInfRegister] = useState({ name: '', email: '', password: '' });
  const stateUpdate = (e) => setInfRegister({ ...registerState, [e.name]: e.value });

  const redirect = useNavigate();

  const PSW_MIN = 6;
  const FULL_NAME = 12;
  const regex = /^[a-z0-9._-]+@[a-z0-9]+\.com$/;

  const isValidForm = () => registerState.password.length > PSW_MIN
    && regex.test(registerState.email) && registerState.name.length <= FULL_NAME;

  const sendRegister = async () => {
    const { name, email, password } = registerState;
    const statusOK = 201;
    const dataRegister = await registerNewUser(email, password, name);
    console.log('🚀 -> dataRegister', dataRegister);
    if (dataRegister.status === statusOK) {
      return redirect('/login', { replace: true });
    } return redirect('/register', { replace: true });
  };

  return (
    <LayoutPage>
      <h1>Cadastro</h1>
      <section>
        <span>Nome</span>
        <Input
          type="name"
          name="name"
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
          name="password"
          data-testid="common_register__input-password"
          wsize="100%"
          onChange={ ({ target }) => stateUpdate(target) }
        />

        <ButtonSD
          wsize="100%"
          msize="20px 0 0 0"
          data-testid="common_register__button-register"
          disabled={ !isValidForm() }
          onClick={ sendRegister }
        >
          Cadastrar
        </ButtonSD>
      </section>
    </LayoutPage>
  );
};

export default Register;
