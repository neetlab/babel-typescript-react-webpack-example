import * as React from 'react';
import ts from '../../images/ts.png';

export const MyComponent: React.SFC = () => {
  return (
    <div className='my-component'>
      <p className='my-component__text'>
        Hello world!
      </p>

      <img
        className='my-component__logo'
        src={ts}
        alt='TypeScirpt'
      />
    </div>
  );
}
