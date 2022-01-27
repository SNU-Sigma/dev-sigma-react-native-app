import {
    View,
    Text,
    FlatList,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Platform,
    Alert,
} from 'react-native'
import {
    PostAuthorImage,
    ProfileView,
    ContentText,
} from '../MainScreen/PostsStyles'
import {
    AdminImage,
    PostDetailView,
    CommentView,
    CommentAuthorImage,
    CommentInputView,
} from './PostDetailStyles'
import { Comment } from '../MainScreen/Posts'
import adminMark from '../assets/images/adminMark.png'
import commentSubmitMark from '../assets/images/commentSubmit.png'
import { useState } from 'react'
import { PostAPI } from '../service/PostAPI'
import { Post } from '../MainScreen/Posts'

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

function CommentInput({ item }: { item: Post }) {
    const [commentContent, setCommentContent] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = () => {
        setIsLoading(true)
        PostAPI.postComment({
            postId: item.id,
            content: commentContent,
        })
            .then(() => {
                setCommentContent('')
            })
            .catch((error) => {
                if (Platform.OS === 'web') {
                    alert(error.message)
                } else {
                    Alert.alert(error.message)
                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <CommentInputView>
            <CommentAuthorImage source={{ uri: src }} />
            {/*My의 profilepicture로 바꿔야 함*/}
            <TextInput
                style={{ marginLeft: 8, flex: 1 }}
                placeholder='댓글을 입력하세요.'
                placeholderTextColor={'grey'}
                value={commentContent}
                onChangeText={setCommentContent}
            />
            <TouchableOpacity onPress={handleSubmit} disabled={isLoading}>
                <Image
                    source={commentSubmitMark}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
        </CommentInputView>
    )
}

export default function PostDetail({ route }: { route: any }) {
    const { post: item } = route.params
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <PostDetailView>
                    <ProfileView>
                        <PostAuthorImage
                            source={{ uri: item.profilePicture }}
                        />
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
                            keyExtractor={(item: string) => item}
                            // keyExtractor 를 어떻게 해야 할까요..?
                            showsHorizontalScrollIndicator={false}
                        />
                    )}
                    {item.comments.length > 0 && (
                        <View>
                            <View
                                style={{
                                    borderBottomColor: '#C4C4C4',
                                    borderBottomWidth: 1,
                                }}
                            />

                            {item.comments.map((comment: Comment) => (
                                <CommentView key={comment.id}>
                                    <CommentAuthorImage
                                        source={{
                                            uri: comment.profilePicture,
                                        }}
                                    />
                                    <View style={{ flex: 1 }}>
                                        {/* 2줄 이상의 comment 를 위한 flex: 1 */}
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                paddingLeft: 8,
                                            }}
                                        >
                                            {comment.authorName}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                paddingLeft: 8,
                                            }}
                                        >
                                            {comment.content}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 8,
                                                paddingLeft: 8,
                                                color: 'grey',
                                            }}
                                        >
                                            {comment.date}
                                        </Text>
                                    </View>
                                </CommentView>
                            ))}
                        </View>
                    )}
                </PostDetailView>
            </ScrollView>
            <CommentInput item={item} />
        </View>
    )
}
