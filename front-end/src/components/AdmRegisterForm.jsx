import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PASSWORD_LENGTH = 6;
const MIN_NAME = 12;

export default function AdmRegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  // const [user, setUser] = useState({});
  const [disabled, setDisabled] = useState(true);

  // const navigate = useNavigate();

  useEffect(() => {
    if (emailRegex.test(email) && password.length >= PASSWORD_LENGTH
    && name.length >= MIN_NAME) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name">
        Nome
        <input
          data-testid="admin_manage__input-name"
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
          data-testid="admin_manage__input-email"
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
          data-testid="admin_manage__input-password"
          type="password"
          id="password"
          name="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <label data-testid="admin_manage__select-role" htmlFor="role">
        Role
        <select value={ role } onChange={ ({ target }) => setRole(target.value) }>
          <option value="" selected disabled hidden>- - -</option>
          <option value="Customer">Customer</option>
          <option value="Seller">Seller</option>
          <option value="Admin">Admin</option>
        </select>
      </label>
      <button
        data-testid="admin_manage__button-register"
        type="submit"
        disabled={ disabled }
      >
        CADASTRAR
      </button>
      {/* {
        user.message && (
          <span data-testid="common_register__element-invalid_register">
            Dados inválidos.
          </span>
        )
      } */}
    </form>
  );
}

// I ORIGINALLY WANTED TO MAKE A COMPONENT OUT OF THE REGULAR REGISTER FORM, BUT BECAUSE THE data-testid ARE DIFFERENT BETWEEN THEM, IT WOULD BE INFINITELY MORE TROUBLE THAN IT IS WORTH
// also styling and layout has to be different
