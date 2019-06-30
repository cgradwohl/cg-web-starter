/* eslint-disable */
import React from 'react'
import { useUser } from '../context/UserContext';

import loadAuthenticatedApp from './AuthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

// const loadAuthenticatedApp = () => import('./AuthenticatedApp');
// const AuthenticatedApp = React.lazy(() => import('./authenticated-app'));
// const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'));

export default ({ Component, pageProps }) => {
  const user = useUser();
  // pre-load the authenticated side in the background while the user's
  // filling out the login form.
  // React.useEffect(() => {
  //   loadAuthenticatedApp()
  // }, [])
  
  return !user ? <AuthenticatedApp Component={Component} pageProps={pageProps} /> : <UnauthenticatedApp />;
};
