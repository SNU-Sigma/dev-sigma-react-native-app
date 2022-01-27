import { View, Text, TextInput } from 'react-native'
import { PostAuthorImage, ProfileView } from '../MainScreen/PostsStyles'
import { PostSubmitTouchableOpacity } from './PostWriteStyle'

const src =
    'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=85&auto=format&fit=max&s=21718fb1379918410ea10054db89f665'

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
                <PostAuthorImage source={{ uri: src }} />
                {/*My의 profilepicture로 바꿔야 함*/}
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
