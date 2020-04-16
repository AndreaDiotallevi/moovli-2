import React, { Component } from "react";
import { mount } from "enzyme";
import App from "../App";

describe("User can view the home page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("should render without errors", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render the title THE MOVIE MAPPER", () => {
    const h1 = wrapper.find("[data-test='app-title']");
    expect(h1).toHaveLength(1);
    expect(h1.text()).toEqual("THE MOVIE MAPPER");
  });
});
