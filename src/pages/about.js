import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styed from 'styled-components';


const MyButton = styed.button`
  background: red;
  font-size: 100px;
`;

export default () => (
  <>
    <div className="columns">
      <div className="column">
        <span className="icon">
          <FontAwesomeIcon icon={['fab', 'apple']} />
        </span>
      </div>
      <div className="column">
        <span className="icon">
          <FontAwesomeIcon icon={['far', 'smile']} />
        </span>
      </div>
      <div className="column">
        <span className="icon">
          <FontAwesomeIcon icon={['fas', 'coffee']} />
        </span>
      </div>
      <div className="column">
        <span className="icon">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </span>
      </div>
      <div className="column">
        <span className="icon">
          <FontAwesomeIcon icon={['fab', 'react']} />
        </span>
      </div>
      <div className="column">
        <span className="icon">
          <FontAwesomeIcon icon={['far', 'grin-alt']} />
        </span>
      </div>
      <div className="column">
        <span className="icon">
          <FontAwesomeIcon icon={['fas', 'cannabis']} />
        </span>
      </div>

      <div className="column">
        <MyButton>HI</MyButton>
        <button className="button is-large is-success" type="button">Button</button>
      </div>
    </div>
  </>
);
