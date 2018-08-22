import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyComponent } from './components/MyComponent';

(() => {
  const mountNode = document.getElementById('root');
  ReactDOM.render(<MyComponent />, mountNode);
})();
