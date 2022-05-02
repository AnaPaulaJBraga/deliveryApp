import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Register() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { email, password, nome } = form;

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post('login', { email, password });
    navigate('/products');
    setUser(response.data);
    console.log(response.data);
  }

  return (
    <>
      <h1>Cadastro</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="nome">
          Nome
          <input
            data-testid="common_register__input-name"
            type="text"
            id="nome"
            name="nome"
            value={ nome }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="common_register__input-email"
            type="email"
            id="email"
            name="email"
            value={ email }
            onChange={ handleChange }
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
            onChange={ handleChange }
          />
        </label>
        <button type="submit" data-testid="common_login__button-login">CADASTRAR</button>
      </form>
    </>
  );
}

export default Register;
