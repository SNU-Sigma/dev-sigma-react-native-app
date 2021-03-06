import { FlatList, Image, Text, View } from 'react-native'
import {
    AdminImage,
    ContentText,
    ImageView,
    MoreText,
    PostAuthorImage,
    PostView,
    PostWriteTouchableOpacity,
    ProfileView,
    TitleText,
} from './PostsStyles'
import adminMark from '../assets/images/adminMark.png'
import postWriteMark from '../assets/images/postWrite.png'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../RootStackParamList'
import { PostAPI } from '../service/PostAPI'
import Spinner from '../common/view/Spinner'

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
                ?????????{' >'}
            </MoreText>

            {item.photos.length > 0 && (
                <ImageView>
                    <Image
                        source={{ uri: item.photos[0] }}
                        style={{ width: 140, height: 132, margin: 4 }}
                    />
                    <Image
                        source={{ uri: item.photos[1] }}
                        style={{ width: 140, height: 132, margin: 4 }}
                    />
                    {/*{item.photos.length > 2 && (*/}
                    {/*    <Text style={{ position: 'absolute', top: 70 }}>*/}
                    {/*        +{item.photos.length - 2}???*/}
                    {/*    </Text>*/}
                    {/*)}*/}
                </ImageView>
            )}
        </PostView>
    )
}

const ListHeader = () => {
    return <TitleText>SIGMA BOARD</TitleText>
}

export default function Posts() {
    const isFocused = useIsFocused()
    const [posts, setPosts] = useState<Array<Post>>([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (isFocused) {
            setIsLoading(true)
            PostAPI.getPosts().then((POSTS) => {
                setPosts(POSTS)
                setIsLoading(false)
            })
        }
    }, [isFocused])
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Spinner isLoading={isLoading} />
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
                <Text>?????? 3???</Text>
            </View>
            <FlatList
                style={{ marginTop: 160 }}
                ListHeaderComponent={ListHeader}
                data={posts}
                renderItem={(props) => <RenderItem {...props} />}
                keyExtractor={(item: Post) => item.id}
            />
            <PostWriteTouchableOpacity
                onPress={() => navigation.navigate('PostWrite')}
            >
                <Image
                    source={postWriteMark}
                    style={{
                        width: 50,
                        height: 50,
                    }}
                />
            </PostWriteTouchableOpacity>
        </View>
    )
}
