import styled from '@emotion/native'
import { Platform } from 'react-native'

export const PostDetailView = styled.View({
    marginHorizontal: 12,
    marginBottom: 8,
    paddingTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 16,
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
    overflow: 'hidden',
})

export const AdminImage = styled.Image({
    position: 'absolute',
    top: 5,
    left: 36,
    width: 19,
    height: 19,
})

export const CommentAuthorImage = styled.Image({
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: 'black',
})

export const CommentView = styled.View({
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
})

export const CommentInputView = styled.View({
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#C1C1C1',
    borderRadius: 12,
})
