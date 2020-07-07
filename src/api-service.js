
export class API {

    static async loginUser(body) {
        const resp = await fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        return await resp.json()
    }

    static async registerUser(body) {
        const resp = await fetch(`http://127.0.0.1:8000/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        return await resp.json()
    }

    static async updateMovie(mov_id, body, token) {
        try {
            const resp = await fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(body)
            })
            return await resp.json()
        }
        catch (error) {
            return console.log(error)
        }
    }

    static async createMovie(body, token) {
        try {
            const resp = await fetch(`http://127.0.0.1:8000/api/movies/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(body)
            })
            return await resp.json()
        }
        catch (error) {
            return console.log(error)
        }
    }

    static async deleteMovie(mov_id, token) {
        try {
            const resp = await fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            })
        }
        catch (error) {
            return console.log(error)
        }
    }
}

