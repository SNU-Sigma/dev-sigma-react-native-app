import { Post } from '../MainScreen/Posts'
import { lightFormat } from 'date-fns'

const src =
    'https://www.kedglobal.com/data/ked/image/2020/12/08/ked202012080028.659x.9.png '
const nature =
    'https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/culture/it/__icsFiles/artimage/2015/04/15/c_km60701/650888_540.jpg'
const stars =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Keplers_supernova.jpg/300px-Keplers_supernova.jpg'
const profilePicture =
    'https://sigma-intel-bucket.s3.ap-northeast-2.amazonaws.com/sigma_logo.png'

const POSTS: Array<Post> = [
    {
        id: '1',
        authorName: 'Jinseok',
        profilePicture: profilePicture,
        date: '2022.01.04.',
        photos: [src, nature, stars],
        content:
            '동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.',
        isAnnouncement: true,
        comments: [
            {
                id: '1',
                authorName: 'Jinseok',
                profilePicture: profilePicture,
                date: '2022.01.24.',
                content:
                    '쉽지 않다 댓글이 두 줄이 넘어가면 어떻게 되는지 테스트를 꼭 해 보고 싶다는 생각이 들었다.',
            },
            {
                id: '2',
                authorName: 'Jinseok',
                profilePicture: profilePicture,
                date: '2022.01.24.',
                content: '쉽지 않다',
            },
            {
                id: '3',
                authorName: 'Jinseok',
                profilePicture: profilePicture,
                date: '2022.01.24.',
                content: '쉽지 않다',
            },
        ],
    },
    {
        id: '2',
        authorName: 'Jinseok',
        profilePicture: profilePicture,
        date: '2022.01.05.',
        photos: [],
        content:
            '동아리의 앱 개발이 한창 진행중입니다. 전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다.',
        isAnnouncement: false,
        comments: [],
    },
    {
        id: '3',
        authorName: 'Jinseok',
        profilePicture: profilePicture,
        date: '2022.03.07.',
        photos: [],
        content:
            '동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 남산 위에 저 소나무 철갑을 두른 듯',
        isAnnouncement: true,
        comments: [],
    },
    {
        id: '4',
        authorName: 'Jinseok',
        profilePicture: profilePicture,
        date: '2022.02.21.',
        photos: [],
        content:
            '전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.',
        isAnnouncement: true,
        comments: [],
    },
]
export const PostAPI = {
    getPosts: async () => {
        return new Promise<Array<Post>>((resolve) => {
            setTimeout(() => {
                resolve(POSTS)
            }, 1000)
        })
    },
    getPost: async (params: { id: string }) => {
        const { id } = params
        const post = POSTS.find((post) => post.id === id)
        return new Promise<Post>((resolve, reject) => {
            setTimeout(() => {
                if (post === undefined) {
                    reject(new Error('존재하지 않는 게시물입니다.'))
                } else {
                    resolve(post)
                }
            }, 500)
        })
    },
    postComment: async (params: { postId: string; content: string }) => {
        return new Promise<void>((resolve, reject) => {
            const { postId, content } = params
            setTimeout(() => {
                if (content.length >= 7) {
                    const postIndex = POSTS.findIndex(
                        (post) => post.id === postId,
                    )
                    const post = POSTS[postIndex]
                    POSTS[postIndex] = {
                        ...post,
                        comments: post.comments.concat({
                            content,
                            date: lightFormat(Date.now(), 'yyyy.MM.dd'),
                            authorName: '테스트_유저네임',
                            id: post.comments.length.toString(),
                            profilePicture,
                        }),
                    }
                    resolve()
                } else {
                    reject(new Error('댓글은 7자 이상 작성해주세요.'))
                }
            }, 1000)
        })
    },
    submitPost: async (params: {
        content: string
        base64Photos: Array<string>
    }) => {
        const { base64Photos, content } = params
        POSTS.push({
            comments: [],
            content,
            date: lightFormat(Date.now(), 'yyyy.MM.dd'),
            authorName: '테스트_유저네임',
            isAnnouncement: false,
            photos: base64Photos.map(
                (base64Photo) => 'data:image/jpeg;base64,' + base64Photo,
            ),
            id: (POSTS.length + 1).toString(),
            profilePicture,
        })
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, 3000)
        })
    },
}
