import React from 'react';
import './App.css';
import MovieList from './components/movielist'

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>

      <div className="layout">
        <MovieList />
        <div>Movie Detail</div>
      </div>
    </div>
  );
}

export default App;
