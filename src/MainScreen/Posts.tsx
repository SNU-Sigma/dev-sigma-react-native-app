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
} from './PostsStyles'
import picture from '../assets/images/picture.png'
import adminMark from '../assets/images/adminMark.png'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
//import { SearchBar } from 'react-native-elements'
//import { Searchbar } from 'react-native-paper'

const src =
    'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=85&auto=format&fit=max&s=21718fb1379918410ea10054db89f665'
const nature =
    'https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/culture/it/__icsFiles/artimage/2015/04/15/c_km60701/650888_540.jpg'
const stars =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Keplers_supernova.jpg/300px-Keplers_supernova.jpg'

export type Post = {
    id: string
    authorName: string
    profilePicture: string
    date: string
    photos: Array<string>
    content: string
    isAdmin: boolean
    comments: Array<Comment>
}

export type Comment = {
    id: string
    authorName: string
    profilePicture: string
    date: string
    content: string
}

const DATA: Array<Post> = [
    {
        id: '1',
        authorName: 'Jinseok',
        profilePicture: '',
        date: '2022.01.04.',
        photos: [src, nature, stars],
        content:
            '동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.',
        isAdmin: true,
        comments: [
            {
                id: '1',
                authorName: 'Jinseok',
                profilePicture: '',
                date: '2022.01.24.',
                content:
                    '쉽지 않다 댓글이 두 줄이 넘어가면 어떻게 되는지 테스트를 꼭 해 보고 싶다는 생각이 들었다.',
            },
            {
                id: '2',
                authorName: 'Jinseok',
                profilePicture: '',
                date: '2022.01.24.',
                content: '쉽지 않다',
            },
            {
                id: '3',
                authorName: 'Jinseok',
                profilePicture: '',
                date: '2022.01.24.',
                content: '쉽지 않다',
            },
        ],
    },
    {
        id: '2',
        authorName: 'Jinseok',
        profilePicture: '',
        date: '2022.01.05.',
        photos: [],
        content:
            '동아리의 앱 개발이 한창 진행중입니다. 전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다.',
        isAdmin: false,
        comments: [],
    },
    {
        id: '3',
        authorName: 'Jinseok',
        profilePicture: '',
        date: '2022.03.07.',
        photos: [],
        content:
            '동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 남산 위에 저 소나무 철갑을 두른 듯',
        isAdmin: true,
        comments: [],
    },
    {
        id: '4',
        authorName: 'Jinseok',
        profilePicture: '',
        date: '2022.02.21.',
        photos: [],
        content:
            '전기정보공학부 소속의 과 동아리이지만, 전기과 학생들 말고도 타 공대나 자연대, 더 나아가 미대 학생들도 같이 참여하고 있습니다. 동아리의 앱 개발이 한창 진행중입니다.',
        isAdmin: true,
        comments: [],
    },
]

type RootStackParamList = {
    PostDetail: { post: Post }
}

function RenderItem({ item }: { item: Post }) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
    return (
        <PostView>
            <ProfileView>
                <ProfileImage source={{ uri: src }} />
                <View>
                    <Text style={{ fontSize: 14, paddingLeft: 8 }}>
                        {item.authorName}
                    </Text>
                    <Text
                        style={{
                            fontSize: 8,
                            paddingLeft: 8,
                            color: 'grey',
                        }}
                    >
                        {item.date}
                    </Text>
                </View>
            </ProfileView>
            {item.isAdmin && <AdminImage source={adminMark} />}
            <ContentText numberOfLines={2}>{item.content}</ContentText>
            <MoreText
                onPress={() =>
                    navigation.navigate('PostDetail', { post: item })
                }
            >
                더보기{' >'}
            </MoreText>
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

export default function Posts() {
    return (
        <View
            style={{
                //flex: 1을 없애고 <Post/>를 감싸고 있던 <View>에서 style 속성을 없애니 괜찮아졌다.
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
                style={{ marginTop: 160 }}
                ListHeaderComponent={ListHeader}
                data={DATA}
                renderItem={(props) => <RenderItem {...props} />}
                keyExtractor={(item: Post) => item.id}
                // showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
