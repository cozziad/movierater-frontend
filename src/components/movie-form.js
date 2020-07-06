import React, { useState } from 'react'

export default function MovieForm(props) {

    const mov = props.movie

    const [title, setTitle] = useState(props.movie.title)
    const [description, setDescription] = useState(mov && mov.description)

    const updateClicked = () => {
        console.log("clicked update");
    }

    return (
        <React.Fragment>
            {mov ? (
                <div>
                    <label for="title">Title</label><br />
                    <input id="title" type="text" placeholder="title" value={title}
                        onChange={evt => setTitle(evt.target.value)} /><br />
                    <label for="description">Description</label><br />
                    <textarea id="description" type="text" placeholder="Description" value={description}
                        onChange={evt => setDescription(evt.target.value)} /><br />
                    <button onClick={updateClicked}>Update</button>
                </div>)
                : null}
        </React.Fragment>
    )
}
