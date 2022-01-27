import { Platform } from 'react-native'
import styled from '@emotion/native'

export const X = styled.TouchableOpacity({
    marginLeft: 30,
    marginTop: 20,
})

export const TitleInfo = styled.Text({
    marginLeft: 29,
    marginTop: 28,
    fontSize: 15,
})

export const DateInfo = styled.Text({
    marginLeft: 29,
    marginTop: 18,
    fontSize: 13,
})

export const UserInfo = styled.Text({
    marginLeft: 29,
    marginTop: 14,
    fontSize: 13,
})

export const ModifyButton = styled.TouchableOpacity({
    backgroundColor: '#FAFF02',
    width: 80,
    height: 40,
    borderRadius: 4,
    marginLeft: 181,
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

export const RemoveButton = styled.TouchableOpacity({
    backgroundColor: '#FAFF02',
    width: 80,
    height: 40,
    borderRadius: 4,
    marginLeft: 15,
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
