import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListItem from '../ListItem';

configure({ adapter: new Adapter() });

describe('<ListItem />', () => {
  it('should exist', () => {
    expect(<ListItem />).toBeDefined();
  });

  it('should exist when called', () => {
    expect(shallow(<ListItem />).exists()).toEqual(true);
  });

  it('should render default with no props', () => {
    expect(shallow(<ListItem />)).toMatchSnapshot();
  });

  it('should render a gray border if the prop is called', () => {
    expect(shallow(
      <ListItem
        hasBorder
      >
        <span>I am a child</span>
      </ListItem>,
    )).toMatchSnapshot();
  });

  it('should render padding if indented', () => {
    expect(shallow(
      <ListItem
        indented
      >
        <span>I am a child</span>
      </ListItem>,
    )).toMatchSnapshot();
  });

  it('should render a custom border width', () => {
    expect(shallow(
      <ListItem
        hasBorder
        borderWidth={2}
      >
        <span>I am a child</span>
      </ListItem>,
    )).toMatchSnapshot();
  });
});
