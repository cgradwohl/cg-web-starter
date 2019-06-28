/**
 * _document is only rendered on the server side and NOT on the client side
 * Event handlers like onClick CANNOT be added to this file
 * Allows you to configure global css, normalize the document, and layout of the document
 * Do any layout that DOES NOT require a browser here.
 */

import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class CGWebStarterDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
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

          <link rel="stylesheet" href="/static/css/normalize.css" />
          <link rel="stylesheet" href="/static/css/font-face.css" />
          <link rel="stylesheet" href="/static/css/fontawesome.min.css" />
          <link rel="stylesheet" href="/static/css/brands.min.css" />
          <link rel="stylesheet" href="/static/css/solid.min.css" />
          <link rel="stylesheet" href="/static/css/bulma.min.css" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CGWebStarterDocument;
