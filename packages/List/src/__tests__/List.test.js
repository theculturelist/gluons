import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import List from '../List';

configure({ adapter: new Adapter() });

describe('<List />', () => {
  it('should exist', () => {
    expect(<List />).toBeDefined();
  });

  it('should exist when called', () => {
    expect(shallow(<List />).exists()).toEqual(true);
  });

  it('should render null when nothing is passed', () => {
    const component = shallow(<List />).childAt(0);
    expect(component.find('list-item').exists()).toEqual(false);
  });

  it('should render a default list', () => {
    const component = shallow(<List />);
    expect(component).toMatchSnapshot();
  });

  it('should render an ordered list', () => {
    const component = shallow(
      <List
        ordered
      >
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
      </List>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should render a group of ListItems when passed children', () => {
    expect(shallow(
      <List>
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
      </List>,
    )).toMatchSnapshot();
  });

  it('should render a lined <ListItem /> when prop is present', () => {
    expect(shallow(
      <List
        lined
      >
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
      </List>,
    )).toMatchSnapshot();
  });

  it('should render a custom line color', () => {
    expect(shallow(
      <List
        lineColor="red"
        lined
      >
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
      </List>,
    )).toMatchSnapshot();
  });

  it('should render a custom line width', () => {
    expect(shallow(
      <List
        lineColor="red"
        lined
        lineWidth={2}
      >
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
        <p>A child</p>
      </List>,
    )).toMatchSnapshot();
  });
});
