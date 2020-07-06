import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function MovieList(props) {

    const [movies, setMovie] = useState([]);
    const movieClicked = movie => evt => {
        props.movieClicked(movie)
    }
    const editClicked = movie => {
        props.editClicked(movie);
    }

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/movies/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token d4f4aad2b8ba34d04d1110522e8ae0d1d9fbed18'
            }
        }).then(resp => resp.json())
            .then(resp => setMovie(resp))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            {movies && movies.map(movie => {
                return (
                    <div key={movie.id} className="movie-list">
                        <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
                        <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(movie)} />
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                )
            })}
        </div>
    )
}
