/* eslint-disable keyword-spacing */
import React from 'react';
import Router from 'next/router';
// export default () => (
//   <>
//     <div className="example">
//       <p>
//         we lit!!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Nam ratione natus molestias dignissimos rem qui tempora amet molestiae
//         porro voluptatibus quae aliquam harum, esse culpa inventore quaerat
//         corporis non iusto?

//         lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Nam ratione natus molestias dignissimos rem qui tempora amet molestiae
//         porro voluptatibus quae aliquam harum, esse culpa inventore quaerat
//         corporis non iusto?
//       </p>
//     </div>
//     <style jsx>
//       {`
//         .example {
//           font-size: 50px;
//           color: black;
//         }
//       `}
//     </style>
//   </>
// );
export default class extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: '/about',
      });
      res.end();
    } else {
      Router.push('/about');
    }
    return {};
  }
}
