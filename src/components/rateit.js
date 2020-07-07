import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useCookies } from 'react-cookie';


export default function RateIt(props) {

    const [highlighted, setHighlighted] = useState(-1);

    const [token] = useCookies(['mr-token']);

    const highlightRate = highRate => evt => {
        setHighlighted(highRate);
    }

    const rateClicked = rate => evt => {
        fetch(`http://127.0.0.1:8000/api/movies/${props.movie.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`
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
                'Authorization': `Token ${token['mr-token']}`
            }

        }).then(resp => resp.json())
            .then(resp => props.updateRating(resp))
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
