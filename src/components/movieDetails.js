import React, { useState } from 'react'
import Stars from './stars'
import RateIt from './rateit'


export default function movieDetails(props) {

    const mov = props.movie;

    const updateMovie = movie => {
        props.updateMovie(movie);
    }

    return (
        <React.Fragment>{
            mov ? (
                <div>
                    <h1>{mov && mov.title}</h1>
                    <p>{mov && mov.description}</p>
                    <Stars movie={mov} />
                    <p>{mov && mov.no_of_ratings} {mov.no_of_ratings === 1 ? 'rating' : 'ratings'} for this movie</p>
                    <RateIt movie={mov} updateMovie={updateMovie} />
                </div>
            ) : null
        }
        </React.Fragment>
    )
}
