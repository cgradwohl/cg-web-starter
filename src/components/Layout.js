import React from 'react';
import Meta from './Meta';
import Navbar from './Navbar';

// eslint-disable-next-line react/prop-types
export default ({ children }) => (
  <>
    <Meta />

    <Navbar />

    {children}
  </>
);
