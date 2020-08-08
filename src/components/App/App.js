import React from "react";
import ReactGA from "react-ga";
import { Router, Route } from "react-router-dom";

import AppMetadata from "../Helmets/AppMetadata";
import Header from "../Header/Header";
import SubHeader from "../SubHeader/SubHeader";
import MapContainer from "../MapContainer/MapContainer";
import MovieList from "../MovieList/MovieList";
import history from "../../history";

ReactGA.initialize("UA-174946804-1");
history.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
});

const App = () => {
  return (
    <div>
      <AppMetadata />
      <Router history={history}>
        <Route component={Header} />
        <Route component={SubHeader} />
        <Route path="/" exact component={MapContainer} />
        <Route path="/:country" component={MovieList} />
      </Router>
    </div>
  );
};

export default App;
