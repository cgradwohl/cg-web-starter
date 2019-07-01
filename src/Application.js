import React from 'react';
// import PropTypes from 'prop-types';

import { Container } from 'next/app';
// import Router from 'next/router';
// import dynamic from 'next/dynamic';

import { useUser } from './context/UserContext';
import Navbar from './components/Navbar';

// eslint-disable-next-line react/prop-types
export default ({ Component, pageProps }) => {
  const user = useUser();
  return user
    ? (
      // AuthenticatedApp
      <Container>
        <Navbar />
        <Component {...pageProps} />
      </Container>

    )
    : (
      <Container>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="username" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="password" />
          </div>
        </div>
      </Container>
    );
};
