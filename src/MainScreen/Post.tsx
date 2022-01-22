import { View, Text, FlatList, Image } from 'react-native'
import {
    PostView,
    ProfileImage,
    AdminImage,
    ProfileView,
    ContentText,
    MoreText,
    ImageView,
    TitleText,
} from './PostStyles'
import picture from '../assets/images/picture.png'
import adminMark from '../assets/images/admin_mark.png'
//import { SearchBar } from 'react-native-elements'
// import { Searchbar } from 'react-native-paper'

type Post = {
    id: string
    authorName: string
    profilePicture: string
    date: string
    photos: Array<string>
    content: string
    isAdmin: boolean
}

const DATA: Array<Post> = [
    {
        id: '1',
        authorName: 'Jinseok',
        profilePicture: '',
        date: '',
        photos: ['photo url'],
        content:
            '전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.',
        isAdmin: true,
    },
    {
        id: '2',
        authorName: 'Jinseok',
        profilePicture: '',
        date: '',
        photos: ['photo url'],
        content:
            '전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.',
        isAdmin: false,
    },
    {
        id: '3',
        authorName: 'Jinseok',
        profilePicture: '',
        date: '',
        photos: ['photo url'],
        content:
            '전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.',
        isAdmin: true,
    },
    {
        id: '4',
        authorName: 'Jinseok',
        profilePicture: '',
        date: '',
        photos: ['photo url'],
        content:
            '전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.',
        isAdmin: true,
    },
]

const renderItem = ({ item }: { item: Post }) => {
    return (
        <PostView>
            <ProfileView>
                <ProfileImage
                    source={{
                        uri: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=85&auto=format&fit=max&s=21718fb1379918410ea10054db89f665',
                    }}
                />
                <Text style={{ fontSize: 14, padding: 8 }}>
                    {item.authorName}
                </Text>
            </ProfileView>
            {item.isAdmin && <AdminImage source={adminMark} />}
            <ContentText numberOfLines={2}>{item.content}</ContentText>
            <MoreText>더보기{' >'}</MoreText>
            <ImageView>
                <Image
                    source={picture}
                    style={{ width: 138, height: 132, margin: 5 }}
                />
                <Image
                    source={picture}
                    style={{ width: 138, height: 132, margin: 5 }}
                />
            </ImageView>
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
                //flex: 1을 없애고 <Post/>를 감싸고 있던 <View>에서 style 속성을 없애니 괜찮아졌다.
                // 의미는 모르겠지만 이렇게 해야 잘 된다
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <View
                style={{
                    width: 334,
                    height: 40,
                    borderWidth: 1,
                    top: 45,
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text>Search</Text>
            </View>
            <View
                style={{
                    width: 334,
                    height: 53,
                    borderWidth: 1,
                    top: 95,
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text>공지 3개</Text>
            </View>
            <FlatList
                // showsHorizontalScrollIndicator={false}
                style={{ marginTop: 160 }} // 검색창과 공지를 위한 공간
                ListHeaderComponent={ListHeader}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item: Post) => item.id}
            />
        </View>
    )
}
