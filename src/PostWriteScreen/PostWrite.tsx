import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Platform,
    Alert,
    FlatList,
} from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { PostAuthorImage, ProfileView } from '../MainScreen/PostsStyles'
import { PostSubmitTouchableOpacity } from './PostWriteStyle'
import Spinner from '../common/view/Spinner'
import * as ImagePicker from 'expo-image-picker'
import sigmaProfilePicture from '../assets/images/sigmaProfile.png'
import galleryIcon from '../assets/images/gallery.png'
import { PostAPI } from '../service/PostAPI'
import { RootStackParamList } from '../../RootStackParamList'
import { StackNavigationProp } from '@react-navigation/stack'

const renderPhotoItem = ({ item }: { item: string }) => {
    return (
        <Image
            source={{ uri: 'data:image/jpeg;base64,' + item }}
            style={{
                width: 140,
                height: 132,
                marginHorizontal: 4,
                marginVertical: 8,
            }}
        />
    )
}

export default function PostWrite() {
    const [selectedImages, setSelectedImages] = useState<Array<string>>([])
    const [postContent, setPostContent] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    const handleSubmit = () => {
        setIsLoading(true)
        PostAPI.submitPost({
            content: postContent,
            base64Photos: selectedImages,
        })
            .then(() => {
                setPostContent('')
                navigation.navigate('Main')
            })
            .catch((error) => {
                setIsLoading(false)
                if (Platform.OS === 'web') {
                    alert(error.message)
                } else {
                    Alert.alert(error.message)
                }
            })
    }

    let openImagePickerAsync = async () => {
        let permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!permissionResult.granted) {
            alert('Permission to access camera roll is required!')
            return
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            base64: true,
        })
        console.log(pickerResult)
        if (pickerResult.cancelled) {
            return
        }
        if (pickerResult.base64 !== undefined) {
            setSelectedImages([...selectedImages, pickerResult.base64])
        }
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 12,
                paddingVertical: 16,
            }}
        >
            <Spinner isLoading={isLoading} />
            <ProfileView>
                <PostAuthorImage source={sigmaProfilePicture} />
                {/*uri: my.profilePicture 로 바꿔야 함*/}
                <Text style={{ fontSize: 14, paddingLeft: 8, flex: 1 }}>
                    시그마멤버
                </Text>
                <TouchableOpacity onPress={openImagePickerAsync}>
                    <Image
                        source={galleryIcon}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
            </ProfileView>
            {selectedImages.length > 0 && (
                <View>
                    <FlatList
                        data={selectedImages}
                        horizontal={true}
                        renderItem={renderPhotoItem}
                        keyExtractor={(item: string) => item}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            )}
            <TextInput
                style={{
                    marginVertical: 12,
                    textAlignVertical: 'top',
                    flex: 1,
                }}
                placeholder='SIGMA BOARD에 올릴 게시글을 작성해주세요.'
                placeholderTextColor='grey'
                multiline={true}
                value={postContent}
                onChangeText={setPostContent}
            />
            <PostSubmitTouchableOpacity onPress={handleSubmit}>
                <Text style={{ fontSize: 16 }}>게시</Text>
            </PostSubmitTouchableOpacity>
        </View>
    )
}
