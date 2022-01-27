import { View, Text, TextInput } from 'react-native'
import { PostAuthorImage, ProfileView } from '../MainScreen/PostsStyles'
import { PostSubmitTouchableOpacity } from './PostWriteStyle'
import sigmaProfilePicture from '../assets/images/sigmaProfile.png'

export default function PostWrite() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 12,
                paddingTop: 16,
            }}
        >
            <ProfileView>
                <PostAuthorImage source={sigmaProfilePicture} />
                {/*uri: item.profilePicture 로 바꿔야 함*/}
                <Text style={{ fontSize: 14, paddingLeft: 8 }}>시그마멤버</Text>
            </ProfileView>
            <TextInput
                style={{
                    marginVertical: 20,
                    textAlignVertical: 'top',
                    flex: 1,
                }}
                placeholder='SIGMA BOARD에 올릴 게시글을 작성해주세요.'
                placeholderTextColor='grey'
                multiline={true}
            />
            <PostSubmitTouchableOpacity>
                <Text style={{ fontSize: 16 }}>게시</Text>
            </PostSubmitTouchableOpacity>
        </View>
    )
}
