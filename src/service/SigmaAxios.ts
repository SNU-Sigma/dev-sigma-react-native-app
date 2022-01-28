import axios from 'axios'

export const sigmaAxios = axios.create({
    baseURL: 'https://sigma-service.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json',
    },
    validateStatus: (statusCode) => {
        return statusCode < 400
    },
})
