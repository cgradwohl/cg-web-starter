import React from 'react';
import Navbar from './Navbar';

// eslint-disable-next-line react/prop-types
export default ({ children }) => (
  <>
    <Navbar />

    {children}
  </>
);
