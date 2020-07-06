import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function RateIt(props) {

    const [highlighted, setHighlighted] = useState(-1);

    const highlightRate = highRate => evt => {
        setHighlighted(highRate);
    }

    const rateClicked = rate => evt => {
        fetch(`http://127.0.0.1:8000/api/movies/${props.movie.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token d4f4aad2b8ba34d04d1110522e8ae0d1d9fbed18'
            },
            body:
                JSON.stringify({
                    stars: rate + 1
                })

        }).then(() => getDetails())
            .catch(error => console.log(error))
    }

    const getDetails = () => {
        fetch(`http://127.0.0.1:8000/api/movies/${props.movie.id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token d4f4aad2b8ba34d04d1110522e8ae0d1d9fbed18'
            }

        }).then(resp => resp.json())
            .then(resp => props.updateMovie(resp))
            .catch(error => console.log(error))
    }

    return (
        <React.Fragment>
            <div className="rate-container">
                <h2> Rate it</h2>
                {[...Array(5)].map((e, i) => {
                    return <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i - 1 ? 'purple' : ''}
                        onMouseEnter={highlightRate(i)}
                        onMouseLeave={highlightRate(-1)}
                        onClick={rateClicked(i)}
                    />
                })}
            </div>
        </React.Fragment>
    )
}
