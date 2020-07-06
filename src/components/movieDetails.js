import React from 'react'
import Stars from './stars'
import RateIt from './rateit'


export default function MovieDetails(props) {

    const mov = props.movie;

    const updateRating = movie => {
        props.updateRating(movie);
    }

    return (
        <React.Fragment>{
            mov ? (
                <div>
                    <h1>{mov && mov.title}</h1>
                    <p>{mov && mov.description}</p>
                    <Stars movie={mov} />
                    <p>{mov && mov.no_of_ratings} {mov.no_of_ratings === 1 ? 'rating' : 'ratings'} for this movie</p>
                    <RateIt movie={mov} updateRating={updateRating} />
                </div>
            ) : null
        }
        </React.Fragment>
    )
}
