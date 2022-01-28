export const ReserveAPI = {
    setReserve: async (params: {
        Title: string
        Start: Date
        End: Date
        User: string
    }) => {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                if (params.Start.getHours() === params.End.getHours()) {
                    reject(new Error('종료시간을 입력하세요.'))
                    return
                }
                if (params.User.length === 0) {
                    reject(new Error('이름을 입력하세요.'))
                    return
                }
                if (params.Title.length === 0) {
                    reject(new Error('제목을 입력하세요.'))
                    return
                }
                resolve()
            }, 1000)
        })
    },
}
