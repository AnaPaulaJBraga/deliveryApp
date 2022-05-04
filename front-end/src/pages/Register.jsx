import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../styles/pages/login.css';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PASSWORD_LENGTH = 6;
const MIN_NAME = 12;

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState({});
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (emailRegex.test(email) && password.length >= PASSWORD_LENGTH
    && name.length >= MIN_NAME) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password]);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post('register', { name, email, password });
      setUser(response.data);
      const userData = {
        id: response.data.userLogged.id,
        nome: response.data.userLogged.name,
        email: response.data.userLogged.email,
        role: response.data.userLogged.role,
        token: response.data.accessToken,
      };

      localStorage.userData = JSON.stringify(userData);
      navigate('/customer/products');
    } catch (error) {
      setUser(error);
    }
  }

  return (
    <>
      <h1>Delivery App</h1>
      <form onSubmit={ onSubmit }>
        <label htmlFor="name">
          Nome
          <input
            data-testid="common_register__input-name"
            type="text"
            id="name"
            name="name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="common_register__input-email"
            type="text"
            id="email"
            name="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            data-testid="common_register__input-password"
            type="password"
            id="password"
            name="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ disabled }
        >
          CADASTRAR
        </button>
        {
          user.message && (
            <span data-testid="common_register__element-invalid_register">
              {
                `O endereço de e-mail, senha ou nome não estão corretos.
                    Por favor, tente novamente.`
              }
            </span>
          )
        }
      </form>
    </>
  );
}

export default Register;
