import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

describe('Home', () => {
  it('should render without errors', () => {
    const wrapper = setUp(Home, { country: '', moovies: [] });
    expect(wrapper).toHaveLength(1);
  });

  it("should render the title MOOVLI", () => {
    const wrapper = setUp(Home, {});
    const h1 = wrapper.find("[data-test='app-title']");
    expect(h1.text()).toEqual('MOOVLI');
  });

  it("should render the title description", () => {
    const wrapper = setUp(Home, {});
    const p = wrapper.find("[data-test='home-header-description']");
    expect(p.text()).toEqual('Click on a country and find the best movies from that country!');
  });
});
