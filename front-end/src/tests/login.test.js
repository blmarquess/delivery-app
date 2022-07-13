import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppRouter from '../main/router/AppRouter';
import { invalidLogin, validLogin } from './mocks/loginMock';
import '@testing-library/jest-dom';
import renderWithRouter from './renderWithRouter';
import '@testing-library/jest-dom';

describe('Login', () => {
  const { validEmail, validPassword } = validLogin;
  const { invalidEmail, invalidPassword } = invalidLogin;

  const setup = () => { renderWithRouter(<AppRouter />, '/') };

  beforeEach(async () => setup());
  test('1 - Verifica se é possível alterar o valor dos inputs e se o valor é guardado', () => {

    //email
    const inputEmail = screen.getByTestId('common_login__input-email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, validEmail);
    expect(inputEmail).toHaveValue(validEmail);
  
    //password
    const inputPassword = screen.getByTestId('common_login__input-password');
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveValue('');
    userEvent.type(inputPassword, validPassword);
    expect(inputPassword).toHaveValue(validPassword);
  })

  test('2 - Verifica se ao colocar um email inválido não é possível efetuar o login', () => {
    
    const inputEmail = screen.getByTestId('common_login__input-email');
    userEvent.type(inputEmail, invalidEmail);

    const inputPassword = screen.getByTestId('common_login__input-password');
    userEvent.type(inputPassword, validPassword);

    const loginButton = screen.getByTestId('common_login__button-login');
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toBeDisabled();

  })

  test('3 - Verifica se ao colocar uma senha inválida não é possível efetuar o login', () => {

    const inputEmail = screen.getByTestId('common_login__input-email');
    userEvent.type(inputEmail, validEmail);
    
    const inputPassword = screen.getByTestId('common_login__input-password');
    userEvent.type(inputPassword, invalidPassword);

    const loginButton = screen.getByTestId('common_login__button-login');
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toBeDisabled();
  })

  test('4 - Verifica se ao clicar no botão de login,com os dados válidos, a página é redirecionada para a role em questão (customer)', async () => {

    const inputEmail = screen.getByTestId('common_login__input-email');
    userEvent.type(inputEmail, validEmail);

    const inputPassword = screen.getByTestId('common_login__input-password');
    userEvent.type(inputPassword, validPassword);

    const loginButton = screen.getByTestId('common_login__button-login');
    expect(loginButton).toBeInTheDocument();
    userEvent.click(loginButton);

    expect(global.window.location.href).toContain('/home');
  });
})