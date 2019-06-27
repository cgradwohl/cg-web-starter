/**
 * Allows you to handle and control page initialization
 * enables page transitions, error boundaries, state management and more
 * Do any layout that does require a browser here. i.e. Dynamic Layout Component, Meta data (CDN)
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
        <Layout>
          <p>HI I AM On EveryPage</p>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default CGWebStarter;
