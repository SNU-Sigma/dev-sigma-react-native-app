import { LoginInfo } from '../common/model/LoginInfo'

export const LoginAPI = (() => {
    let loginInfo: LoginInfo | undefined

    const login = async (info: LoginInfo) => {
        // TODO: 추후 실제 API 연동 필요
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                if (info.email === 'sigma' && info.password === '1234') {
                    resolve()
                    loginInfo = info
                }
                reject('올바르지 않은 계정 정보입니다.')
            }, 1000)
        })
    }

    const getLoginInfo = () => {
        return loginInfo
    }

    return {
        login,
        getLoginInfo,
    }
})()
