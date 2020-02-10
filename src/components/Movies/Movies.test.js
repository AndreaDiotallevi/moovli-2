import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
}

describe('Movies', () => {

  it('should render without errors', () => {
    const wrapper = setUp(Movies, {country: '', movies: []});
    expect(wrapper).toHaveLength(1);
  })

  it("should render 'You have choosen United Kingdom! when clicked within UK", () => {
    const wrapper = setUp(Movies, {country: 'United Kingdom', movies: []});
    const h1 = wrapper.find("[data-test='movies-country-message']");
    expect(h1.text()).toEqual('You have choosen United Kingdom!');
  })
  
  it('should render the movies title', () => {
    const wrapper = setUp(Movies, {country: 'Poland', movies: [{id: 1, title: 'title'}] });
    const h3 = wrapper.find("[data-test='movie-title-1']")
    expect(h3.text()).toEqual('title')
  })

  it('should render the movies overview', () => {
    const wrapper = setUp(Movies, {country: 'Poland', movies: [{id: 1, title: 'title', overview: 'overview'}] });
    const p = wrapper.find("[data-test='movie-overview-1']")
    expect(p.text()).toEqual('overview')
  })

  it('should render the movies release date', () => {
    const wrapper = setUp(Movies, {country: 'Poland', movies: [{id: 1, title: 'title', overview: 'overview', releaseDate: '2020-01-01' }] });
    const p = wrapper.find("[data-test='movie-release-date-1']")
    expect(p.text()).toEqual('2020-01-01')
  })

  it('should render the movies vote average', () => {
    const wrapper = setUp(Movies, {country: 'Poland', movies: [{id: 1, title: 'title', overview: 'overview', releaseDate: '2020-01-01', voteAverage: 9.5 }] });
    const p = wrapper.find("[data-test='movie-vote-average-1']")
    expect(p.text()).toEqual('9.5')
  })
})
