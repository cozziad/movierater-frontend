import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { API } from '../api-service'
import { useCookies } from 'react-cookie';

export default function MovieList(props) {

    const mov = props.movies

    const [token] = useCookies(['mr-token']);

    const movieClicked = movie => evt => {
        props.movieClicked(movie);
    }
    const editClicked = movie => {
        props.editClicked(movie);
    }

    const removeClicked = movie => {
        API.deleteMovie(movie.id, token['mr-token'])
            .then(() => props.removeClicked(movie))
            .catch(error => console.log(error))
    }

    return (
        <div>
            {mov && mov.map(movie => {
                return (
                    <div key={movie.id} className="movie-list">
                        <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
                        <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(movie)} />
                        <FontAwesomeIcon icon={faTrash} onClick={() => removeClicked(movie)} />
                    </div>
                )
            })}
        </div>
    )
}
