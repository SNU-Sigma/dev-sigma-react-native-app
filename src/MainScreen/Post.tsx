// Jinseok's work
import { View, Text, FlatList, Image } from 'react-native'
import { PostView } from './PostStyles'

interface Post {
    id: number
    author: string
    content: string
    photos: Array<string>
    isAdmin: boolean
}

const DATA: Array<Post> = [
    {
        id: 1,
        author: 'Jinseok',
        content:
            '전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.',
        photos: ['photo url'],
        isAdmin: false,
    },
    {
        id: 2,
        author: 'Jinseok',
        content: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet',
        photos: ['photo url'],
        isAdmin: false,
    },
    {
        id: 3,
        author: 'Jinseok',
        content: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet',
        photos: ['photo url'],
        isAdmin: false,
    },
    {
        id: 4,
        author: 'Jinseok',
        content: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet',
        photos: ['photo url'],
        isAdmin: false,
    },
]

export default function Post() {
    const renderItem = ({ item }: { item: Post }) => {
        return (
            <PostView>
                <View
                    style={{
                        flex: 4,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={require('../assets/images/Ellipse 1.svg')}
                        style={{ width: 44, height: 44 }}
                    />
                    <Text style={{ padding: 4 }}>{item.author}</Text>
                </View>
                <Text style={{ flex: 2, fontSize: 12 }} numberOfLines={2}>
                    {item.content}
                </Text>
                <Text style={{ flex: 1, fontSize: 12 }}>더보기</Text>
                <View style={{ flex: 9, flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/images/Rectangle 15.png')}
                        style={{ width: 138, height: 131, margin: 4 }}
                    />
                    <Image
                        source={require('../assets/images/Rectangle 15.png')}
                        style={{ width: 138, height: 131, margin: 4 }}
                    />
                </View>
            </PostView>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
            }}
        >
            <Text
                style={{ paddingTop: 40, paddingLeft: 32, fontWeight: 'bold' }}
            >
                SIGMA BOARD
            </Text>
            <FlatList data={DATA} renderItem={renderItem} />
        </View>
    )
}
