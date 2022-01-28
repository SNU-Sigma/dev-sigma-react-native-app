import { LoginCredential } from '../common/model/LoginCredential'

export const LoginAPI = (() => {
    let loginCredential: LoginCredential | undefined
    let username: string | undefined

    const login = async (info: LoginCredential) => {
        // TODO: 추후 실제 API 연동 필요
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                if (info.email === 'sigma' && info.password === '1234') {
                    resolve()
                    loginCredential = info
                    username = '테스트_유저네임'
                }
                reject(new Error('올바르지 않은 계정 정보입니다.'))
            }, 1000)
        })
    }

    const getLoginCredential = () => {
        return loginCredential
    }

    const getUserName = () => {
        return username
    }

    return {
        login,
        getLoginCredential,
        getUserName,
    }
})()
