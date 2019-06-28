import React from 'react';
import Link from 'next/link';

export default () => (
  <div>
    <Link href="/">
      <button className="testingClass" type="button">Home</button>
    </Link>
    <Link href="/about">
      <button className="testingClass" type="button">About</button>
    </Link>
    <style jsx>
      {`
        .testingClass {
          color: purple;
          margin-right: 15px;
        }
      `}
    </style>
  </div>
);
