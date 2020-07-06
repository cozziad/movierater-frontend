import React, { useState } from 'react';
import './App.css';
import MovieList from './components/movieList'
import MovieDetails from './components/movieDetails'
import MovieForm from './components/movie-form'

function App() {

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditiedMovie] = useState(null);

  const loadMovie = movie => {
    setSelectedMovie(movie)
    setEditiedMovie(null)
  }

  const editClicked = movie => {
    setEditiedMovie(movie)
    setSelectedMovie(null)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>

      <div className="layout">
        <MovieList movieClicked={loadMovie} editClicked={editClicked} />
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie} />
        {editedMovie ? <MovieForm movie={editedMovie} /> : null}
      </div>
    </div>
  );
}

export default App;
