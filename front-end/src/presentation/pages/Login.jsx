import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import validateEmail from '../../main/useCases/validateEmail';
import validatePassword from '../../main/useCases/validatePassword';
import saveUserDataInLocalStorage from '../../main/useCases/saveUserDataInLocalStorage';

import Input from '../components/basis/Input';
import ButtonSD from '../components/basis/ButtonSD';
import LayoutPage from '../layout/LayoutPage';
import logarUser from '../../main/useCases/logarUser';

export default function Login() {
  const [loginState, setInfLogin] = useState({ user: '', psw: '' });
  const stateUpdate = (e) => setInfLogin({ ...loginState, [e.name]: e.value });
  const RedirectToPath = useNavigate();
  const [renderError, setRenderError] = useState(false);

  const isValidForm = () => validatePassword(loginState.psw)
    && validateEmail(loginState.user);

  async function handleSubmit() {
    const statusOK = 200;
    const dataLogin = await logarUser(loginState.user, loginState.psw);
    if (dataLogin.status === statusOK) {
      saveUserDataInLocalStorage(dataLogin.data);
      const rotaUserByRole = dataLogin.data.role;
      if (rotaUserByRole === 'administrator') {
        return RedirectToPath('/admin');
      }
      return RedirectToPath(`/${rotaUserByRole}`);
    }
    setRenderError(true);
  }

  function renderErrorMessage() {
    return (
      <p data-testid="common_login__element-invalid-email">Invalid email or password</p>
    );
  }

  React.useEffect(() => {
    const userIsLogged = localStorage.getItem('userData');
    if (userIsLogged) {
      const userData = JSON.parse(userIsLogged);
      return RedirectToPath(`/${userData.role}`);
    }
  }, [RedirectToPath]);

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
          psize=" 0.5rem 2rem"
          radius="0.4rem"
          onClick={ () => handleSubmit() }
          data-testid="common_login__button-login"
          disabled={ !isValidForm() }
        >
          Entrar
        </ButtonSD>

        <ButtonSD
          wsize="100%"
          msize="20px 0 0 0"
          psize=" 0.5rem 2rem"
          radius="0.4rem"
          onClick={ () => RedirectToPath('/register') }
          data-testid="common_login__button-register"
        >
          Registrar-se
        </ButtonSD>
        {renderError && renderErrorMessage()}
      </section>
    </LayoutPage>
  );
}
