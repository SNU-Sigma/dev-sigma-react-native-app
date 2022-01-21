export const LoginAPI = {
    login: async (params: { email: string; password: string }) => {
        // TODO: 추후 실제 API 연동 필요
        if (
            params.email === 'test_email' &&
            params.password === 'test_password'
        ) {
            return Promise.resolve()
        }
        return Promise.reject('올바르지 않은 계정 정보입니다.')
    },
}
