import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movieList'
import MovieDetails from './components/movieDetails'
import MovieForm from './components/movie-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useCookies } from 'react-cookie';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

  const [token, setToken, deleteToken] = useCookies(['mr-token']);

  useEffect(() => {
    if (!token['mr-token']) window.location.href = '/';
  }, [token])

  const loadMovie = movie => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  }
  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }

  const removeClicked = movie => {
    const newMovies = movies.filter(mov => mov.id !== movie.id);
    setMovies(newMovies);
  }

  const updatedMovie = movie => {
    const newMovies = movies.map(mov => {
      if (mov.id === movie.id) {
        return movie;
      }
      return mov;
    })
    setMovies(newMovies)
  }

  const createdMovie = movie => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
  }

  const newMovie = () => {
    setEditedMovie({ title: '', description: '' });
    setSelectedMovie(null);
  }

  const logoutUser = () => {
    deleteToken(['mr-token']);
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token['mr-token']}`
      }
    }).then(resp => resp.json())
      .then(resp => setMovies(resp))
      .catch(error => console.log(error))
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FontAwesomeIcon icon={faFilm} />
          <span>Movie rater</span>
        </h1>
        <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser} />
      </header>

      <div className="layout">
        <div>
          <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked} removeClicked={removeClicked} />
          <button onClick={newMovie}>Add Movie</button>
        </div>
        {selectedMovie ? <MovieDetails movie={selectedMovie} updateRating={loadMovie} /> : null}
        {editedMovie ? <MovieForm movie={editedMovie} updatedMovie={updatedMovie} createdMovie={createdMovie} /> : null}
      </div>
    </div>
  );
}

export default App;
