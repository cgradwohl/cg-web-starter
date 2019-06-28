import React from 'react';
import Header from './Header';

// eslint-disable-next-line react/prop-types
export default ({ children }) => (
  <div className="layoutStyle">
    <Header />
    {children}
    <style jsx>
      {`
        .layoutStyle {
          margin: 20px;
          padding: 20px;
          border: 1px solid #DDD;
        }
      `}
    </style>
  </div>
);
