import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { PostAuthorImage, ProfileView } from '../MainScreen/PostsStyles'
import { PostSubmitTouchableOpacity } from './PostWriteStyle'
import sigmaProfilePicture from '../assets/images/sigmaProfile.png'
import galleryIcon from '../assets/images/gallery.png'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'

export default function PostWrite() {
    const [selectedImage, setSelectedImage] = useState<any>(null)
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
        setSelectedImage({ localUri: pickerResult.uri })
    }
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
                <Text style={{ fontSize: 14, paddingLeft: 8, flex: 1 }}>
                    시그마멤버
                </Text>
                <TouchableOpacity onPress={openImagePickerAsync}>
                    <Image
                        source={galleryIcon}
                        style={{ marginHorizontal: 4, width: 24, height: 24 }}
                    />
                </TouchableOpacity>
            </ProfileView>
            {selectedImage !== null && (
                <Image
                    source={{
                        uri: selectedImage.localUri,
                    }}
                    style={{ width: 140, height: 140, marginTop: 16 }}
                />
            )}
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
