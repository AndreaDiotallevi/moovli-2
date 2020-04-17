import React from "react";
import MapContainer from "../MapContainer/MapContainer";

const Home = ({ onCountryChoice, infoWindowVisible, onClickCoordinates }) => (
  <div className="home-component" data-test="app">
    <div className="home-component-header">
      <h1 className="home-header-title" data-test="app-title">
        THE MOVIE MAPPER
      </h1>
      <p
        className="home-header-description"
        data-test="home-header-description"
      >
        Click on a country and find the best movies from that country!
      </p>
    </div>
    <div className="map-container">
      <MapContainer
        onCountryChoice={onCountryChoice}
        infoWindowVisible={infoWindowVisible}
        onClickCoordinates={onClickCoordinates}
      />
    </div>
  </div>
);

export default Home;
