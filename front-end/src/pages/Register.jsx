import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import '../styles/pages/login.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryRegister, setFailedTryRegister] = useState(false);

  const register = async (event) => {
    event.preventDefault();

    try {
      const { token, user } = await registerUser('/register', { name, email, password });

      localStorage.setItem('user', JSON.stringify({ token, ...user }));
      setIsLogged(true);
    } catch (error) {
      setFailedTryRegister(true);
      setIsLogged(false);
    }
  };

  const handleChange = (target, stateFunction) => {
    stateFunction(target.value);
  };

  useEffect(() => {
    setFailedTryRegister(false);
  }, [name, email, password]);

  if (isLogged) return <Navigate to="/products" />;

  const MIN_NAME = 3;
  const MIN_CHARACTER = 6;
  const EMAIL_REGEX = /.+@.+\..+/;

  return (
    <section>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            className="login__login_input"
            type="text"
            value={ name }
            onChange={ ({ target }) => handleChange(target, setName) }
            data-testid="common_register__input-name"
            placeholder="Seu nome aqui"
          />
        </label>
        <label htmlFor="email-input">
          Email
          <input
            className="login__login_input"
            type="email"
            value={ email }
            onChange={ ({ target }) => handleChange(target, setEmail) }
            data-testid="common_register__input-email"
            placeholder="Seu email aqui"
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            value={ password }
            onChange={ ({ target }) => handleChange(target, setPassword) }
            data-testid="common_register__input-password"
            placeholder="Digite sua senha"
          />
        </label>
        {
          (failedTryRegister)
            ? (
              <p data-testid="common_register__element-invalid_register">
                {
                  `O endereço de e-mail ou a senha não estão corretos.
                    Por favor, tente novamente.`
                }
              </p>
            )
            : null
        }

        <button
          data-testid="common_register__button-register"
          type="submit"
          onClick={ (event) => register(event) }
          disabled={
            password.length < MIN_CHARACTER || !EMAIL_REGEX || name.length < MIN_NAME
          }
        >
          CADASTRAR
        </button>

      </form>
    </section>

  );
};

export default Register;

// https://github.com/tryber/sd-014-a-trybe-futebol-clube/blob/main/app/frontend/src/pages/Login.jsx
