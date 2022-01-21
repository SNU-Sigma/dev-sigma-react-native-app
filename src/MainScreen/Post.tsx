import { View, Text, FlatList, Image } from 'react-native'
import {
    TitleText,
    PostView,
    AdminImage,
    ProfileView,
    ContentText,
    MoreText,
} from './PostStyles'
import profile from '../assets/images/sigmaprofile.png'
import picture from '../assets/images/picture.png'
import adminmark from '../assets/images/adminmark.png'
//import { SearchBar } from 'react-native-elements'
// import { Searchbar } from 'react-native-paper'

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
        isAdmin: true,
    },
    {
        id: 2,
        author: 'Jinseok',
        content:
            '안녕하세요, 관악 최강 로봇 동아리 SIGMA INTELLIGENCE입니다! 전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 덕분에 과 동아리의 장점인 과의 지원과',
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

const renderItem = ({ item }: { item: Post }) => {
    return (
        <PostView>
            <ProfileView>
                <Image source={profile} style={{ width: 42, height: 42 }} />
                <Text style={{ fontSize: 14, padding: 8 }}>{item.author}</Text>
            </ProfileView>
            {item.isAdmin && <AdminImage source={adminmark} />}
            <ContentText numberOfLines={2}>{item.content}</ContentText>
            <MoreText>더보기{'>'}</MoreText>
            <View style={{ height: 131, flexDirection: 'row' }}>
                <Image
                    source={picture}
                    style={{ width: 138, height: 131, marginHorizontal: 5 }}
                />
                <Image
                    source={picture}
                    style={{ width: 138, height: 131, marginHorizontal: 5 }}
                />
            </View>
        </PostView>
    )
}

const ListHeader = () => {
    return <TitleText>SIGMA BOARD</TitleText>
}

export default function Post() {
    return (
        <View
            style={{
                flex: 1, // 의미는 모르겠지만 이렇게 해야 잘 된다
                justifyContent: 'center',
            }}
        >
            <View
                style={{
                    borderWidth: 1,
                    width: 334,
                    height: 40,
                    top: 45,
                    position: 'absolute',
                }}
            />
            <View
                style={{
                    borderWidth: 1,
                    width: 334,
                    height: 53,
                    top: 95,
                    position: 'absolute',
                }}
            />
            <FlatList
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 170 }} // 검색창과 공지를 위한 공간
                data={DATA}
                ListHeaderComponent={ListHeader}
                renderItem={renderItem}
                keyExtractor={(item: Post) => String(item.id)}
            />
        </View>
    )
}
