/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from 'next/app';
import Layout from './Layout';

export default ({ Component, pageProps }) => (
  <Container>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Container>
);
