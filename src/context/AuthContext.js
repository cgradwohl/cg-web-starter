import React from 'react';
import { useAsync } from 'react-async';
import bootstrapAppData from '../utils/bootstrap';
import * as authClient from '../utils/authClient';

const AuthContext = React.createContext();

function AuthProvider(props) {
  const {
    data = { user: null, listItems: [] },
    reload,
  } = useAsync({
    promiseFn: bootstrapAppData,
  });

  const login = form => authClient.login(form).then(reload);
  const register = form => authClient.register(form).then(reload);
  const logout = () => authClient.logout().then(reload);

  return (
    <AuthContext.Provider
      value={{
        data,
        login,
        logout,
        register,
      }}
      {...props}
    />
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export {
  AuthProvider,
  useAuth,
};
