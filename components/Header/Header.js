import React from 'react';
import Link from 'next/link';
import styles from './styles.scss';

const Header = () => (
  <div>
    <Link href="/">
      <button className={styles.testingClass} type="button">Home</button>
    </Link>
    <Link href="/about">
      <button className={styles.testingClass} type="button">About</button>
    </Link>
  </div>
);

export default Header;
