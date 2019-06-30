/**
 * Allows you to handle and control page initialization
 * enables page transitions, error boundaries, state management and more
 * Do any layout that does require a browser here. i.e. Dynamic Layout Component, Meta data (CDN)
 */
import React from 'react';
import App from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import fontawesome from '../utils/fontawesome';
import Application from '../components/Application';
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

    return (
      <AppProviders>
        <Application Component={Component} pageProps={pageProps} />
      </AppProviders>
    );
  }
}

export default CGWebStarter;
