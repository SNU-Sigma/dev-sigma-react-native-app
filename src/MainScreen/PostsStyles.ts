import styled from '@emotion/native'
import { Platform } from 'react-native'

export const TitleText = styled.Text({
    marginLeft: 32,
    fontSize: 14,
    fontWeight: 'bold',
})

export const PostView = styled.View({
    marginHorizontal: 24,
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    shadowColor: Platform.select({
        android: '#000000',
        default: 'rgba(0,0,0,0.25)',
    }),
    shadowRadius: 9,
    shadowOffset: { width: 3, height: 4 },
    elevation: 10,
})

export const ProfileView = styled.View({
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
})

export const PostAuthorImage = styled.Image({
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: 'black',
})

export const AdminImage = styled.Image({
    position: 'absolute',
    top: 5,
    left: 48,
    width: 19,
    height: 19,
})

export const ContentText = styled.Text({
    marginTop: 8,
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'justify',
})

export const MoreText = styled.Text({
    marginTop: 4,
    lineHeight: 20,
    fontSize: 12,
    textAlign: 'right',
})

export const ImageView = styled.View({
    height: 140,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
})

export const PostWriteTouchableOpacity = styled.TouchableOpacity({
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
})
