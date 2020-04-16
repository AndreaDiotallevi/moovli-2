import React from "react";
import { mount } from "enzyme";
import App from "./App";

jest.mock("./api/fetchCountryCode");
jest.mock("./api/fetchMovieData");
jest.mock("./api/fetchMovies");
jest.mock("./api/fetchCoordinates");

const setUp = (Component = {}) => {
  const component = mount(<Component />);
  return component;
};

const movie = {
  imdbID: 1,
  title: "Title",
  plot: "Plot",
  releaseDate: "2020-01-01",
  imdbRating: 9.5,
  posterURL: "https://image.tmdb.org/t/p/w400/dom2esWWW8C9jS2v7dOhW48LwHh.jpg",
  genreList: ["Comedy"],
};

describe("App", () => {
  it("should render without errors", () => {
    const wrapper = setUp(App);
    expect(wrapper).toHaveLength(1);
  });

  it("should be able to handle a country choice", async () => {
    const wrapper = setUp(App);
    wrapper.setState({
      country: "",
      movies: [],
      infoWindowVisible: false,
    });
    const instance = wrapper.instance();
    jest.spyOn(instance, "handleCountryChoice");
    await instance.handleCountryChoice({}, {}, "Poland coordinates");

    expect(wrapper.state("country")).toEqual("Poland");
    expect(wrapper.state("movies")).toEqual([movie]);
  });

  it("should be able to catch an error if there are no movies for a country", async () => {
    const wrapper = setUp(App);
    wrapper.setState({
      country: "",
      movies: [],
      infoWindowVisible: false,
    });

    expect(wrapper.state("infoWindowVisible")).toEqual(false);

    const instance = wrapper.instance();
    jest.spyOn(instance, "handleCountryChoice");
    await instance.handleCountryChoice({}, {}, "Benin coordinates");

    expect(wrapper.state("infoWindowVisible")).toEqual(true);
  });
});
