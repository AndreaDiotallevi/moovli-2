import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('./api/fetchCountryCode');
jest.mock('./api/fetchMovieData');
jest.mock('./api/fetchMovies');

const setUp = (Component = {}) => {
  const component = shallow(<Component />);
  return component;
};

describe('App', () => {
  it('should render without errors', () => {
    const wrapper = setUp(App);
    expect(wrapper).toHaveLength(1);
  });

  it('should handle back to home functionality', () => {
    const wrapper = setUp(App);
    wrapper.setState({
      movies: ["movie"],
      infoWindowVisible: true
    });
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleBackToHome');
    instance.handleBackToHome();

    expect(wrapper.state('movies')).toEqual([]);
    expect(wrapper.state('infoWindowVisible')).toEqual(false);
  });

  it('should be able to handle a country choice', async () => {
    const movie = {
      imdbID: 1,
      title: 'title',
      plot: 'plot',
      releaseDate: '2020-01-01',
      imdbRating: 9.5,
      posterURL: 'https://image.tmdb.org/t/p/w400/dom2esWWW8C9jS2v7dOhW48LwHh.jpg',
      genreList: ['Comedy'],
    };
    const wrapper = setUp(App);
    wrapper.setState({
      country: '',
      movies: [],
      infoWindowVisible: true
    });
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleCountryChoice');
    await instance.handleCountryChoice();

    expect(wrapper.state('country')).toEqual('Poland');
    expect(wrapper.state('movies')).toEqual([movie]);
  });
});
