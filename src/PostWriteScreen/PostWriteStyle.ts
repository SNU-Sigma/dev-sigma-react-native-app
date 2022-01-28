import styled from '@emotion/native'
import { Platform } from 'react-native'

export const PostSubmitTouchableOpacity = styled.TouchableOpacity({
    backgroundColor: '#FAFF02',
    width: 80,
    height: 40,
    borderRadius: 4,
    position: 'absolute',
    bottom: 24,
    right: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Platform.select({
        android: '#000000',
        default: 'rgba(0,0,0,0.25)',
    }),
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
})
