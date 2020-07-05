import React, { useState, useEffect } from 'react';

export default function MovieList(props) {

    const [movies, setMovie] = useState([]);

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
                return <h2>{movie.title}</h2>
            })}
        </div>
    )
}
