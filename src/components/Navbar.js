import React from 'react';
import Link from 'next/link';

export default () => (
  <div>
    <Link href="/">
      <button className="button is-primary" type="button">Home</button>
    </Link>
    <Link href="/about">
      <button className="button is-primary" type="button">About</button>
    </Link>
  </div>
);
