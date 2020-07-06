import React, { useState } from 'react';
import './App.css';
import MovieList from './components/movieList'
import MovieDetails from './components/movieDetails'

function App() {

  const [selectedMovie, setSelectedMovie] = useState(null);

  const movieClicked = movie => {
    setSelectedMovie(movie)
  }

  const loadMovie = movie => {
    setSelectedMovie(movie)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>

      <div className="layout">
        <MovieList movieClicked={movieClicked} />
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie} />
      </div>
    </div>
  );
}

export default App;
