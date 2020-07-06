import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Stars(props) {
    return (
        <React.Fragment>{
            props.movie ? (
                <div>
                    <FontAwesomeIcon icon={faStar} className={props.movie.avg_rating > 0 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={props.movie.avg_rating > 1 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={props.movie.avg_rating > 2 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={props.movie.avg_rating > 3 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={props.movie.avg_rating > 4 ? 'orange' : ''} />
                </div>
            ) : (<div>Star Rating Not Available</div>)}
        </React.Fragment>
    )
}
