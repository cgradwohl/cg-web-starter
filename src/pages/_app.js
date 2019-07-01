/**
 * Allows you to handle and control page initialization
 * enables page transitions, error boundaries, state management and more
 * Do any layout that does require a browser here. i.e. Dynamic Layout Component, Meta data (CDN)
 */
import React from 'react';
import App from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import fontawesome from '../utils/fontawesome';
import Layout from '../Layout';
import Navbar from '../components/Navbar';
import AppProviders from '../context';

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
    // 1. get data from local storage
    // 2. authenticate the auth data
    //      if the auth data is valid,
    //        then add the auth data to user context
    //        then take user to Index page.
    //      else
    //        add the non auth data to user context (default)
    //        take the user to the Login page

    return (
      <AppProviders>
        <Layout>
          <Navbar />
          <Component {...pageProps} />
        </Layout>
      </AppProviders>
    );
  }
}

export default CGWebStarter;
