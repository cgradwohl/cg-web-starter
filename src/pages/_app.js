/**
 * Allows you to handle and control page initialization
 * enables page transitions, error boundaries, state management and more
 * Do any layout that does require a browser here. i.e. Dynamic Layout Component, Meta data (CDN)
 */
import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import fontawesome from '../utils/fontawesome';
import Layout from '../Layout';
import Navbar from '../components/Navbar';
import UserContext from '../context/UserContext';

library.add(fontawesome);

export default class MyApp extends App {
  state = {
    user: null,
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount = () => {
    const user = localStorage.getItem('coolapp-user');
    if (user) {
      this.setState({
        user,
      });
    } else {
      Router.push('/about');
    }
  };

  signIn = (username) => {
    localStorage.setItem('coolapp-user', username);

    this.setState(
      {
        user: username,
      },
      () => {
        Router.push('/');
      },
    );
  };

  signOut = () => {
    localStorage.removeItem('coolapp-user');
    this.setState({
      user: null,
    });
    Router.push('/signin');
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <UserContext.Provider
          value={{ user: this.state.user, signIn: this.signIn, signOut: this.signOut }}
        >
          <Layout>
            <Navbar />
            <Component {...pageProps} />
          </Layout>
        </UserContext.Provider>
      </Container>
    );
  }
}
