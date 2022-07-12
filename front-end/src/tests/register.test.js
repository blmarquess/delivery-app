import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { invalidRegister, validRegister } from './mocks/registerMock';
import '@testing-library/jest-dom';
import renderWithRouter from './renderWithRouter';

test('Register', () => {
  const { validEmail, validPassword, validName } = validRegister;
  const { invalidEmail } = invalidRegister;

  test('1 - Verifica se é possível alterar o valor dos inputs e se o valor é guardado', () => {
    renderWithRouter(<App />);

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
    expect(inputPassword, validPassword);
  })

  test('2 - Verifica se ao colocar um email inválido é exibido uma mensagem de erro', () => {
    renderWithRouter(<App />);
    
    const inputEmail = screen.getByTestId('common_register__input-email');
    userEvent.type(inputEmail, invalidEmail);

    const loginButton = screen.getByTestId('common_register__button-register');
    expect(loginButton).toBeInTheDocument();
    userEvent.click(loginButton);

    const errorMessage = screen.getByTestId('common_register__element-invalid_register');
    expect(errorMessage).toBeInTheDocument();
  })

  test('3 - Verifica se ao clicar no botão de registrar, com os dados válidos, a página é redirecionada para a role em questão (customer)', async () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId('common_register__input-email');
    userEvent.type(inputEmail, validEmail);

    const inputPassword = screen.getByTestId('common_register__input-password');
    userEvent.type(inputPassword, validPassword);

    const loginButton = screen.getByTestId('common_register__button-register');
    expect(loginButton).toBeInTheDocument();
    userEvent.click(loginButton);

    const customerNavbar = screen.getByTestId('customer_products__element-navbar-link-products');
    expect(customerNavbar).toBeInTheDocument();
  });
});