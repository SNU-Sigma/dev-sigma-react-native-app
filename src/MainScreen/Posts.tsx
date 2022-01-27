import { View, Text, FlatList, Image } from 'react-native'
import {
    PostView,
    PostAuthorImage,
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
import { useAsync } from 'react-async'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../RootStackParamList'
import { PostAPI } from '../service/PostAPI'
import Spinner from '../common/view/Spinner'
//import { SearchBar } from 'react-native-elements'
//import { Searchbar } from 'react-native-paper'

export type Post = {
    id: string
    authorName: string
    profilePicture: string
    date: string
    photos: Array<string>
    content: string
    isAnnouncement: boolean
    comments: Array<Comment>
}

export type Comment = {
    id: string
    authorName: string
    profilePicture: string
    date: string
    content: string
}

function RenderItem({ item }: { item: Post }) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
    return (
        <PostView>
            <ProfileView>
                <PostAuthorImage source={{ uri: item.profilePicture }} />
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
            {item.isAnnouncement && <AdminImage source={adminMark} />}
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
    const { data, error, isLoading } = useAsync({
        promiseFn: PostAPI.getPosts,
    })
    if (isLoading) return <Spinner isLoading={isLoading} />
    if (data)
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
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
                        height: 52,
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
                    data={data}
                    renderItem={(props) => <RenderItem {...props} />}
                    keyExtractor={(item: Post) => item.id}
                />
            </View>
        )
    return null
}
