import styled from '@emotion/native'
import { Platform } from 'react-native'

export const PostDetailScrollView = styled.ScrollView({
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 24,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#C4C4C4',
    marginBottom: 16,
    shadowColor: Platform.select({
        android: '#000000',
        default: 'rgba(0,0,0,0.25)',
    }),
    shadowRadius: 9,
    shadowOffset: { width: 3, height: 4 },
    elevation: 10,
})

export const AdminImage = styled.Image({
    position: 'absolute',
    top: 10,
    left: 30,
    width: 21,
    height: 21,
})

export const CommentView = styled.View({
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
})
