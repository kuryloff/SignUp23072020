import * as axios from "axios"

const instance = axios.create({
    baseURL: `http://localhost:3004`
})

export const usersAPI = {
    setUser(user) {
        return instance.post(`/users`, user, {
            'Content-Type': 'application/json'
        })
    },

    getUsers(){
        return  instance.get('/users').then(res=>res.data)
    }

}

