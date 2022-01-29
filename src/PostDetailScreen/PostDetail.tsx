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
import { useState } from 'react'
import { RouteProp } from '@react-navigation/native'
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
import { Post } from '../MainScreen/Posts'
import { Comment } from '../MainScreen/Posts'
import adminMark from '../assets/images/adminMark.png'
import commentSubmitMark from '../assets/images/commentSubmit.png'
import { PostAPI } from '../service/PostAPI'
import { RootStackParamList } from '../../RootStackParamList'

const renderPhotoItem = ({ item }: { item: string }) => {
    return (
        <Image
            source={{ uri: item }}
            // TODO: uri: 'data:image/jpeg;base64,' + item 으로 수정해야 함
            style={{ width: 140, height: 132, margin: 4 }}
        />
    )
}

function CommentInput({
    item,
    setComments,
}: {
    item: Post
    setComments: (comments: Array<Comment>) => void
}) {
    const [commentContent, setCommentContent] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const handleCommentSubmit = () => {
        setIsLoading(true)

        PostAPI.postComment({
            postId: item.id,
            content: commentContent,
        })
            .then(() => {
                setCommentContent('')
                PostAPI.getPost({ id: item.id }).then(({ comments }) => {
                    setComments(comments)
                })
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
            <CommentAuthorImage source={{ uri: item.profilePicture }} />
            <TextInput
                style={{ marginHorizontal: 8, flex: 1 }}
                placeholder='댓글을 입력하세요.'
                placeholderTextColor={'grey'}
                value={commentContent}
                onChangeText={setCommentContent}
            />
            <TouchableOpacity
                onPress={handleCommentSubmit}
                disabled={isLoading}
            >
                <Image
                    source={commentSubmitMark}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
        </CommentInputView>
    )
}

export default function PostDetail({
    route,
}: {
    route: RouteProp<RootStackParamList, 'PostDetail'>
}) {
    const { post: item } = route.params
    const [comments, setComments] = useState<Array<Comment>>(item.comments)
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
                    {item.isAnnouncement && <AdminImage source={adminMark} />}
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
                    {comments.length > 0 && (
                        <View>
                            <View
                                style={{
                                    borderBottomColor: '#C4C4C4',
                                    borderBottomWidth: 1,
                                    marginTop: 4,
                                }}
                            />

                            {comments.map((comment: Comment) => (
                                <CommentView key={comment.id}>
                                    <CommentAuthorImage
                                        source={{ uri: comment.profilePicture }}
                                    />
                                    <View style={{ flex: 1 }}>
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
            <CommentInput item={item} setComments={setComments} />
        </View>
    )
}
