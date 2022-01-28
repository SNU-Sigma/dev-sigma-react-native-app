import axios from 'axios'
import { LoginAPI } from './LoginAPI'

export const sigmaAxios = axios.create({
    baseURL: 'https://sigma-service.herokuapp.com/',
    transformRequest: (data) => {
        return {
            ...data,
            user: LoginAPI.getLoginCredential(),
        }
    },
    validateStatus: (statusCode) => {
        return statusCode < 400
    },
})
