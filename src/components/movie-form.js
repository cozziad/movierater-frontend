import React, { useState, useEffect } from 'react'
import { API } from '../api-service'
import { useCookies } from 'react-cookie';

export default function MovieForm(props) {

    const mov = props.movie

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [token] = useCookies(['mr-token']);

    useEffect(() => {
        setTitle(props.movie.title);
        setDescription(props.movie.description);
    }, [props.movie])

    const updateClicked = () => {
        API.updateMovie(mov.id, { title, description }, token['mr-token'])
            .then(resp => props.updatedMovie(resp))
            .catch(error => console.log(error))

    }

    const createClicked = () => {
        API.createMovie({ title, description }, token['mr-token'])
            .then(resp => props.createdMovie(resp))
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
                    {props.movie.id ?
                        <button onClick={updateClicked}>Update</button> :
                        <button onClick={createClicked}>Create</button>
                    }
                </div>)
                : null}
        </React.Fragment>
    )
}
