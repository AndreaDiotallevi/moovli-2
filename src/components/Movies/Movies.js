import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import noPhotoAvailable from '../../assets/no-photo-available.jpg';
import leftArrow from '../../assets/left-arrow.png'

class Movies extends Component {
  state = {
    genreList: ["Action", "Comedy", "Crime",
                "Drama", "Romance",
                "Sci-Fi", "Thriller"],
    selectedGenre: null
  }

  handleGenreChoice = (event) => {
    const selectedGenre = event.target.value;
    this.setState({selectedGenre});
  }

  filterMovies = () => {
    if (this.state.selectedGenre === 'All' || this.state.selectedGenre === null) {
      return this.props.movies;
    } else {
      return this.props.movies.filter((movie) => movie.genreList.includes(this.state.selectedGenre));
    }
  }

  handleImageUrlError = (event) => {
    event.target.src = noPhotoAvailable;
  }

  render() {
    return (
      <div className='movies-component' data-test="movies">
        <div className='movies-component-header'>
          <div className='header-title-container'>
            <Link to='/'>
              <p><img className='back-home-link' src={leftArrow} alt='back-home-link'></img></p>
            </Link>
            <h1 className='header-title' data-test='movie-country-message'>WELCOME TO {this.props.match.params.country.toUpperCase()}</h1>
          </div>
          <div className='genre-buttons'>
            {this.state.genreList.map((genre, index) => <button className='genre-button'
                                                      value={genre}
                                                      onClick={this.handleGenreChoice}
                                                      data-test={`genre-button-${genre.toLocaleLowerCase()}`}
                                                      key={index}>{genre}</button>)}
            <button value={'All'} className='genre-button' onClick={this.handleGenreChoice}>All</button>
          </div>
        </div>
        <div className='movies-container' data-test="movies-container">
          <ul>
            {this.filterMovies().map((movie, index) => (
            <li className='movie' data-test={`movie-${movie.imdbID}`} key={index}>
              <div className='movie-image'>
                <a href={`https://www.imdb.com/title/${movie.imdbID}/`}>
                  <img className='movie-poster' data-test={`movie-poster-url-${movie.imdbID}`} alt={`movie-poster-url-${movie.imdbID}`}
                    src={`${movie.posterURL}`} onError={this.handleImageUrlError}>
                  </img>
                </a>
              </div>
              <div className='movie-info'>
                <div className='title-plot-container'>
                  <div className='movie-title-container'> 
                    <a className='movie-title-anchor' href={`https://www.imdb.com/title/${movie.imdbID}/`}>
                      <h2 className='movie-title' data-test={`movie-title-${movie.imdbID}`}>
                        {movie.title.toUpperCase()}
                      </h2>
                    </a>
                  </div>
                  <p className='movie-plot' data-test={`movie-plot-${movie.imdbID}`}>
                    {movie.plot}
                  </p>
                </div>
                <div className='date-rating-container'>
                  <p className='movie-release-date' data-test={`movie-release-date-${movie.imdbID}`}>
                    <span className='movie-release-date-title'></span>{movie.releaseDate}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
  }
}

export default Movies;
