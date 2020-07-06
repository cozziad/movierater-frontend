import React, { useState } from 'react'
import { API } from '../api-service'

export default function MovieForm(props) {

    const mov = props.movie

    const [title, setTitle] = useState(props.movie.title)
    const [description, setDescription] = useState(mov && mov.description)

    const updateClicked = () => {
        API.updateMovie(mov.id, { title, description })
            .then(resp => props.updatedMovie(resp))
            .catch(error => console.log(error))

    }

    return (
        <React.Fragment>
            {mov ? (
                <div>
                    <label htmlFor="title">Title</label><br />
                    <input id="title" type="text" placeholder="title" value={title}
                        onChange={evt => setTitle(evt.target.value)} /><br />
                    <label htmlFor="description">Description</label><br />
                    <textarea id="description" type="text" placeholder="Description" value={description}
                        onChange={evt => setDescription(evt.target.value)} /><br />
                    <button onClick={updateClicked}>Update</button>
                </div>)
                : null}
        </React.Fragment>
    )
}
