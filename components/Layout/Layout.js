import React from 'react';
import Header from '../Header/Header';
import styles from './styles.scss';


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div className={styles.layoutStyle}>
    <Header />
    {children}
  </div>
);

export default Layout;
