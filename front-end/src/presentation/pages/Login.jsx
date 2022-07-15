import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import validateEmail from '../../main/useCases/validateEmail';
import validatePassword from '../../main/useCases/validatePassword';
import saveUserDataInLocalStorage from '../../main/useCases/saveUserDataInLocalStorage';
import redirectToPath from '../../main/useCases/redirectToPath';

import Input from '../components/basis/Input';
import ButtonSD from '../components/basis/ButtonSD';
import LayoutPage from '../layout/LayoutPage';
import logarUser from '../../main/useCases/logarUser';

export default function Login() {
  const [loginState, setInfLogin] = useState({ user: '', psw: '' });
  const stateUpdate = (e) => setInfLogin({ ...loginState, [e.name]: e.value });

  const isValidForm = () => validatePassword(loginState.psw)
    && validateEmail(loginState.user);

  const handleSubmit = async () => {
    const statusOK = 200;
    const dataLogin = await logarUser(loginState.user, loginState.psw);
    saveUserDataInLocalStorage(dataLogin.data);
    if (dataLogin.status === statusOK) {
      const rotaUserByRole = dataLogin.data.role;
      return redirectToPath(`/${rotaUserByRole}`);
    }
  };

  return (
    <LayoutPage>
      <section>
        <span>Email:</span>
        <Input
          type="email"
          name="user"
          data-testid="common_login__input-email"
          wsize="100%"
          value={ loginState.user }
          onChange={ ({ target }) => stateUpdate(target) }
        />
        <span>Senha:</span>
        <Input
          value={ loginState.psw }
          type="password"
          name="psw"
          data-testid="common_login__input-password"
          wsize="100%"
          onChange={ ({ target }) => stateUpdate(target) }
        />

        <ButtonSD
          wsize="100%"
          msize="20px 0 0 0"
          onClick={ handleSubmit }
          data-testid="common_login__button-login"
          disabled={ !isValidForm() }
        >
          Entrar
        </ButtonSD>

        <Link to="/register">
          <ButtonSD
            wsize="100%"
            msize="20px 0 0 0"
            data-testid="common_login__button-register"
          >
            Registrar-se
          </ButtonSD>
        </Link>
      </section>
    </LayoutPage>
  );
}
