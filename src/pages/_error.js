/* eslint-disable */
/**
 * overrides the default error component for 404 or 500 errors
 * component is only used in production
 */
import React from 'react';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const {
      statusCode,
    } = this.props;
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    );
  }
}

export default Error;
