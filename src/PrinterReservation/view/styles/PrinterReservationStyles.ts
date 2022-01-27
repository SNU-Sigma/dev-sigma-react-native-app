import { Platform } from 'react-native'
import styled from '@emotion/native'

export const X = styled.TouchableOpacity({
    marginLeft: 38,
    marginTop: 12,
})

export const Title = styled.Text({
    height: 18,
    marginLeft: 28,
    marginTop: 26,
    color: '#000000',
})

export const TitleInput = styled.TextInput({
    width: 337,
    height: 60,
    marginTop: 6,
    marginLeft: 21,
    borderRadius: 10,
    backgroundColor: 'rgba(223,223,223,1)',
    paddingLeft: 7,
})

export const Boundary1 = styled.View({
    height: 1,
    width: '100%',
    marginTop: 19,
    backgroundColor: '#C4C4C4',
})

export const TimeText = styled.Text({
    marginTop: 13,
    marginLeft: 28,
    color: '#000000',
})

export const StartTimeText = styled.Text({
    marginTop: 6,
    marginLeft: 28,
    color: '#636363',
})

export const EndTimeText = styled.Text({
    marginTop: 6,
    marginLeft: 28,
    color: '#636363',
})

export const SelectedTimeText = styled.TouchableOpacity<{
    isSelected: boolean
}>((props) => ({
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: props.isSelected ? '#C1C1C1' : '#ffffff',
    alignItems: 'center',
    width: 55,
    height: 19,
    borderRadius: 10,
}))

export const Boundary2 = styled.View({
    height: 1,
    width: '100%',
    marginTop: 17,
    backgroundColor: '#C4C4C4',
})

export const UserText = styled.Text({
    marginTop: 14,
    marginLeft: 28,
    color: '#000000',
})

export const CautionText = styled.Text({
    marginTop: 29,
    marginLeft: 28,
    color: '#000000',
})

export const SaveButton = styled.TouchableOpacity({
    backgroundColor: '#FAFF02',
    width: 80,
    height: 40,
    borderRadius: 4,
    marginLeft: 281,
    marginTop: 36,
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
