import * as React from 'react';

import Woody from '../assets/images/woody.png';

interface HelloProps { 
  compiler: string;
  framework: string; 
}

const Hello = (props: HelloProps) => {
  return (
    <div className='App'>
      <img src="Woody" alt="woody image"/>
      <h1>Hello from {props.compiler} and {props.framework}!</h1>
    </div>
  );
}

export default Hello;
