import React from 'react';
import Layout from '../components/Layout';


const About = () => (
  <Layout>
    <div className="exampleAbout">
      <p>About!!</p>
    </div>
    <style jsx>
      {`
        .exampleAbout {
          font-size: 40px;
          color: red;
        }
      `}
    </style>
  </Layout>
);

export default About;
