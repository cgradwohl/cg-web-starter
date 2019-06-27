/**
 * Allows you to handle and control page initialization
 * enables page transitions, error boundaries, state management and more
 */
import React from 'react';
import App, { Container } from 'next/app';

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
        <p>HIHIHIHI</p>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default CGWebStarter;
