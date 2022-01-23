import { View, Text, FlatList, Image } from 'react-native'
import {
    ProfileImage,
    ProfileView,
    ContentText,
} from '../MainScreen/PostsStyles'
import {
    AdminImage,
    PostDetailScrollView,
    CommentView,
} from './PostDetailStyles'
import adminMark from '../assets/images/왕관 아이콘 묶음.png'
import { Comment, Post } from '../MainScreen/Posts'

const src =
    'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=85&auto=format&fit=max&s=21718fb1379918410ea10054db89f665'

const renderPhotoItem = ({ item }: { item: string }) => {
    return (
        <Image
            source={{ uri: item }}
            style={{ width: 138, height: 132, margin: 5 }}
        />
    )
}

const renderCommentItem = ({ item }: { item: Comment }) => {
    return (
        <CommentView>
            <ProfileImage source={{ uri: src }} />
            <View style={{ flex: 1 }}>
                {/* 2줄 이상의 comment 를 위한 flex: 1 */}
                <Text style={{ fontSize: 14, paddingLeft: 12 }}>
                    {item.authorName}
                </Text>
                <Text style={{ fontSize: 10, paddingLeft: 12 }}>
                    {item.content}
                </Text>
                <Text
                    style={{
                        fontSize: 8,
                        paddingLeft: 12,
                        color: 'grey',
                    }}
                >
                    {item.date}
                </Text>
                {/*comment 에는 isAdmin 이 없다.. ㅠㅠ*/}
            </View>
        </CommentView>
    )
}

export default function PostDetail({ route }: { route: any }) {
    const { post: item } = route.params
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <PostDetailScrollView>
                <ProfileView>
                    <ProfileImage source={{ uri: src }} />
                    <View>
                        <Text style={{ fontSize: 14, paddingLeft: 12 }}>
                            {item.authorName}
                        </Text>
                        <Text
                            style={{
                                fontSize: 8,
                                paddingLeft: 12,
                                color: 'grey',
                            }}
                        >
                            {item.date}
                        </Text>
                    </View>
                </ProfileView>
                {item.isAdmin && <AdminImage source={adminMark} />}
                <ContentText>{item.content}</ContentText>
                {item.photos.length > 0 && (
                    <FlatList
                        data={item.photos}
                        horizontal={true}
                        renderItem={renderPhotoItem}
                        // keyExtractor 를 어떻게 해야 할까요..?
                        showsHorizontalScrollIndicator={false}
                    />
                )}
                {item.comments.length > 0 && (
                    <View style={{ marginBottom: 20 }}>
                        <View
                            style={{
                                borderBottomColor: '#C4C4C4',
                                borderBottomWidth: 1,
                            }}
                        />
                        <FlatList
                            data={item.comments}
                            renderItem={renderCommentItem}
                            keyExtractor={(item: Comment) => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                )}
            </PostDetailScrollView>
        </View>
    )
}
