import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../styles/pages/login.css';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const { email, password } = form;

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
      <h1>Delivery App</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="email">
          Email
          <input
            data-testid="common_login__input-email"
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
            data-testid="common_login__input-password"
            type="password"
            id="password"
            name="password"
            value={ password }
            onChange={ handleChange }
          />
        </label>
        <button type="submit" data-testid="common_login__button-login">Login</button>
        <Link to="/register">
          <button
            type="button"
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </form>
    </>
  );
}

export default Login;
