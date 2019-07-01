/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from 'next/app';
import Navbar from './components/Navbar';
import Layout from './Layout';

export default ({ Component, pageProps }) => (
  <Container>
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  </Container>
);
