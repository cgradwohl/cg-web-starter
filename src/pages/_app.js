/**
 * Allows you to handle and control page initialization
 * enables page transitions, error boundaries, state management and more
 * Do any layout that does require a browser here. i.e. Dynamic Layout Component, Meta data (CDN)
 */
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

import { library } from '@fortawesome/fontawesome-svg-core';
import fontawesome from '../helpers/fontawesome';
import Layout from '../components/Layout';

library.add(fontawesome);

class CGWebStarter extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
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
          <link rel="stylesheet" href="../static/css/cg-bulma.min.css" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default CGWebStarter;
