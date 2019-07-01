/* eslint-disable react/prop-types */
import React from 'react';
import { AuthProvider } from './AuthContext';
import { UserProvider } from './UserContext';

export default ({ children }) => (
  <AuthProvider>
    <UserProvider>
      {children}
    </UserProvider>
  </AuthProvider>
);
