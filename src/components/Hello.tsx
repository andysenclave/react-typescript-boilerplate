import React from 'react';

import * as woody from '../assets/images/woody.png';

interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = ({ compiler, framework }: HelloProps) => (
  <div className="App">
    <img src={woody} alt="woody image" />
    <h1>
      Hello from {compiler} and {framework}!
    </h1>
  </div>
);

export default Hello;
