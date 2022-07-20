import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import validateEmail from '../../main/useCases/validateEmail';
import validatePassword from '../../main/useCases/validatePassword';
import registerNewUser from '../../main/useCases/registerNewUser';

import LayoutPage from '../layout/LayoutPage';
import Input from '../components/basis/Input';
import ButtonSD from '../components/basis/ButtonSD';

export default function Register() {
  const [registerState, setInfRegister] = useState({ name: '', email: '', password: '' });
  const stateUpdate = (e) => setInfRegister({ ...registerState, [e.name]: e.value });
  const RedirectToPath = useNavigate();
  const FULL_NAME = 12;

  const isValidForm = () => validatePassword(registerState.psw)
    && validateEmail(registerState.user) && registerState.name.length >= FULL_NAME;

  const sendRegister = async () => {
    const { name, email, password } = registerState;
    const statusOK = 201;
    const dataRegister = await registerNewUser(email, password, name);
    if (dataRegister.status === statusOK) {
      return RedirectToPath('/login');
    } return RedirectToPath('/register');
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
          psize=" 0.5rem 2rem"
          radius="0.4rem"
          data-testid="common_register__button-register"
          disabled={ !isValidForm() }
          onClick={ sendRegister }
        >
          Cadastrar
        </ButtonSD>
      </section>
    </LayoutPage>
  );
}
