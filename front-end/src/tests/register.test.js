import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppRouter from '../main/router/AppRouter';
import { invalidRegister, validRegister } from './mocks/registerMock';
import '@testing-library/jest-dom';
import renderWithRouter from './renderWithRouter';

describe('Register', () => {
  const { validEmail, validPassword, validName } = validRegister;
  const { invalidEmail, invalidPassword, invalidName } = invalidRegister;

  const setup = () => { renderWithRouter(<AppRouter />, '/register') };

  beforeEach(async () => setup());
  it('1 - Verifica se é possível alterar o valor dos inputs e se o valor é guardado', () => {

    //name
    const inputName = screen.getByTestId('common_register__input-name');
    expect(inputName).toBeInTheDocument();
    expect(inputName).toHaveValue('');
    userEvent.type(inputName, validName);
    expect(inputName).toHaveValue(validName);

    //email
    const inputEmail = screen.getByTestId('common_register__input-email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, validEmail);
    expect(inputEmail).toHaveValue(validEmail);
  
    //password
    const inputPassword = screen.getByTestId('common_register__input-password');
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveValue('');
    userEvent.type(inputPassword, validPassword);
    expect(inputPassword).toHaveValue(validPassword);
  })

  it('2 - Verifica se ao colocar um email inválido não é possível realizar o cadastro', () => {

    const inputName = screen.getByTestId('common_register__input-name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, validName);
    
    const inputEmail = screen.getByTestId('common_register__input-email');
    userEvent.type(inputEmail, invalidEmail);

    const inputPassword = screen.getByTestId('common_register__input-password');
    expect(inputPassword).toBeInTheDocument();
    userEvent.type(inputPassword, validPassword);


    const registerButton = screen.getByTestId('common_register__button-register');
    expect(registerButton).toBeInTheDocument();
    expect(registerButton).toBeDisabled();
  })

  it('3 - Verifica se ao colocar uma senha inválida não é possível realizar o cadastro', () => {
    
    const inputName = screen.getByTestId('common_register__input-name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, validName);
    
    const inputEmail = screen.getByTestId('common_register__input-email');
    userEvent.type(inputEmail, validEmail);

    const inputPassword = screen.getByTestId('common_register__input-password');
    expect(inputPassword).toBeInTheDocument();
    userEvent.type(inputPassword, invalidPassword);


    const registerButton = screen.getByTestId('common_register__button-register');
    expect(registerButton).toBeInTheDocument();
    expect(registerButton).toBeDisabled();
  })

  it('4 - Verifica se ao colocar um nome inválido não é possível realizar o cadastro', () => {
    
    const inputName = screen.getByTestId('common_register__input-name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, invalidName);
    
    const inputEmail = screen.getByTestId('common_register__input-email');
    userEvent.type(inputEmail, validEmail);

    const inputPassword = screen.getByTestId('common_register__input-password');
    expect(inputPassword).toBeInTheDocument();
    userEvent.type(inputPassword, validPassword);


    const registerButton = screen.getByTestId('common_register__button-register');
    expect(registerButton).toBeInTheDocument();
    expect(registerButton).toBeDisabled();
  })

  it('5 - Verifica se ao clicar no botão de registrar, com os dados válidos, a página é redirecionada de volta para o login', async () => {

    const inputName = screen.getByTestId('common_register__input-name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, validName);

    const inputEmail = screen.getByTestId('common_register__input-email');
    userEvent.type(inputEmail, validEmail);

    const inputPassword = screen.getByTestId('common_register__input-password');
    userEvent.type(inputPassword, validPassword);

    const loginButton = screen.getByTestId('common_register__button-register');
    expect(loginButton).toBeInTheDocument();
    userEvent.click(loginButton);

    expect(global.window.location.href).toContain('/login');
  });
});