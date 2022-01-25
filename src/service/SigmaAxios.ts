import axios from 'axios'
import { LoginAPI } from './LoginAPI'

export const sigmaAxios = axios.create({
    transformRequest: (data) => {
        return {
            ...data,
            user: LoginAPI.getLoginCredential(),
        }
    },
})
