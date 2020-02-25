import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import fetchCountryCode from './api/fetchCountryCode'
import fetchMovies from './api/fetchMovies'
import countryCodesJson from './countryCodes.json';

class App extends Component {
  state = {
    country: '',
    movies: [],
    infoWindowVisible: false,
    onClickCoordLatLng: []
  }

  handleCountryChoice = async (t, map, coord) => {
    await fetchCountryCode(t, map, coord)
      .then(response => {
        const countryCode = response.address.country_code;
        const country = countryCodesJson[countryCode];
        this.setState({country, infoWindowVisible: false});
        console.log('Country: ', country);
        return country;
          }).then(country => Promise.all(fetchMovies(country))
            ).then(response => {
              const movies = response.filter(movie => movie !== undefined);
              this.setState({movies});
              console.log('Movies: ', movies);
            })
      .catch(error => {
        console.log('Error caught')
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        this.setState({infoWindowVisible: true});
        this.setState({onClickCoordLatLng: [lat, lng]});
      })
  }

  handleBackToHome = () => {
    this.setState({movies: [], infoWindowVisible: false});
  };

  render() {
    return (
      <div className='App'>
        {this.state.movies.length === 0 && <Home onCountryChoice={this.handleCountryChoice} infoWindowVisible={this.state.infoWindowVisible} onClickCoordLatLng={this.state.onClickCoordLatLng}/>}
        {this.state.movies.length !== 0 && <Movies movies={this.state.movies} country={this.state.country} onBackToHome={this.handleBackToHome}/>}
      </div>
    );
  }
}

export default App;
