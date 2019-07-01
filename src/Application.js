import React from 'react';
// import PropTypes from 'prop-types';

import { Container } from 'next/app';
// import Router from 'next/router';
// import dynamic from 'next/dynamic';

import { useUser } from './context/UserContext';
import Navbar from './components/Navbar';

// eslint-disable-next-line react/prop-types
const AuthenticatedApp = ({ Component, pageProps }) => (
  <Container>
    <Navbar />
    <Component {...pageProps} />
  </Container>
);

// eslint-disable-next-line react/prop-types
const UnauthenticatedApp = ({ Component, pageProps }) => (
  <Container>
    <button className="button" type="button" />
    <Component {...pageProps} />
  </Container>
);

// eslint-disable-next-line react/prop-types
export default ({ Component, pageProps }) => {
  console.log('yo', pageProps);
  const user = useUser();
  console.log('user', user);
  // return user
  //   ? <AuthenticatedApp Component={Component} pageProps={pageProps} />
  //   : <UnauthenticatedApp />;
  return <UnauthenticatedApp Component={Component} pageProps={pageProps} />;
};
