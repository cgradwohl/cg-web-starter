import React from 'react';
import Head from 'next/head';

export default () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf8" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />

    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
    <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5" />

    <link rel="stylesheet" href="../static/css/normalize.css" />
    {/* <link rel="stylesheet" href="../static/css/font-face.css" /> */}
    {/* <link rel="stylesheet" href="../static/css/fontawesome.min.css" /> */}
    {/* <link rel="stylesheet" href="../static/css/brands.min.css" /> */}
    {/* <link rel="stylesheet" href="../static/css/solid.min.css" /> */}
    <link rel="stylesheet" href="../static/css/cg-bulma.min.css" />
  </Head>
);
