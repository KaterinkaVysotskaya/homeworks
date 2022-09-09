import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/',
    body: {success: true}
})

export const requestAPI = {
     getUsers() {
         return instance.get()
             .then(response => response.data)

     }
}