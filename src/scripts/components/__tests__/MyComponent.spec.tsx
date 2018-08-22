import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MyComponent } from '../MyComponent';

describe('MyComponent', () => {
  it('renders a component', () => {
    const tree = renderer.create(
      <MyComponent />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
