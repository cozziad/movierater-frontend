const TOKEN = "d4f4aad2b8ba34d04d1110522e8ae0d1d9fbed18"


export class API {
    static updateMovie(mov_id, body) {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
            .catch(error => console.log(error))
    }
}
