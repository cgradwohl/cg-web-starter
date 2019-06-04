import React from 'react';
import Layout from '../components/Layout';


const Index = () => (
  <Layout>
    <div className="example">
      <p>we lit!!</p>
    </div>
    <style jsx>
      {`
        .example {
          font-size: 50px;
          color: green;
        }
      `}
    </style>
  </Layout>
);

export default Index;
