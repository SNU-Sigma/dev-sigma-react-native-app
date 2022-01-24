import styled from '@emotion/native'
import { Platform } from 'react-native'

export const TitleText = styled.Text({
    marginLeft: 30,
    marginBottom: 7,
    fontSize: 14,
    fontWeight: 'bold',
})

export const PostView = styled.View({
    //width: 335,
    //height: 300,
    marginHorizontal: 24,
    marginBottom: 16,
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
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
})

export const ProfileImage = styled.Image({
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
    marginTop: 10,
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'justify',
})

export const MoreText = styled.Text({
    marginTop: 5,
    lineHeight: 19,
    fontSize: 12,
    textAlign: 'right',
})

export const ImageView = styled.View({
    height: 156,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
})
