const TOKEN = "d4f4aad2b8ba34d04d1110522e8ae0d1d9fbed18"


export class API {
    static async updateMovie(mov_id, body) {
        try {
            const resp = await fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${TOKEN}`
                },
                body: JSON.stringify(body)
            })
            return await resp.json()
        }
        catch (error) {
            return console.log(error)
        }
    }

    static async createMovie(body) {
        try {
            const resp = await fetch(`http://127.0.0.1:8000/api/movies/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${TOKEN}`
                },
                body: JSON.stringify(body)
            })
            return await resp.json()
        }
        catch (error) {
            return console.log(error)
        }
    }

    static async deleteMovie(mov_id) {
        try {
            const resp = await fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${TOKEN}`
                }
            })
        }
        catch (error) {
            return console.log(error)
        }
    }
}

