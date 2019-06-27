/**
 * _document is only rendered on the server side and NOT on the client side
 * Event handlers like onClick CANNOT be added to this file
 * Allows you to configure global css, normalize the document, and layout of the document
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
          {/* Can link to a CDN here or include a CSS in JS solution for SSR */}
          <style>{'body { margin: 0px } /* custom! */'}</style>
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
