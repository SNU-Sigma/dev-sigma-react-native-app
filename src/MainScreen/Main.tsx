import { View, Text } from 'react-native'
import Post from './Post'

export default function MainScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Post />
        </View>
    )
}
