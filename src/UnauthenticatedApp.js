import React from 'react';
import { Container } from 'next/app';
import Layout from './Layout';
import { useAuth } from './context/AuthContext';

// eslint-disable-next-line react/prop-types
function LoginForm({ onSubmit, buttonText }) {
  function handleSubmit(event) {
    event.preventDefault();
    const {
      username,
      password,
    } = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      }}
    >
      <label htmlFor="username">
        Username
        <input id="username" />
      </label>

      <label htmlFor="password">
        Password
        <input id="password" type="password" />
      </label>

      <div>
        <button className="button is-warning" type="submit">{buttonText}</button>
      </div>
    </form>
  );
}

export default () => {
  const { login, register } = useAuth();

  return (
    <Container>
        <LoginForm onSubmit={login} buttonText="Login" />
        <LoginForm onSubmit={register} buttonText="Register" />
    </Container>
  );
};
