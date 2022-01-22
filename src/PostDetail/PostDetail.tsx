import { View, Text } from 'react-native'

// type Post = {
//     id: string
//     authorName: string
//     profilePicture: string
//     date: string
//     photos: Array<string>
//     content: string
//     isAdmin: boolean
// }

export default function PostDetail({ route }: { route: any }) {
    const { post } = route.params
    const { id, authorName, profilePicture, date, photos, content, isAdmin } =
        post
    return (
        <View>
            <Text>{date}</Text>
            <Text>{content}</Text>
        </View>
    )
}
