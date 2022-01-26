import { View } from 'react-native'
import {
    EmailInput,
    FindAccount,
    LogInButtonContainer,
    LogInButtonText,
    PasswordInput,
    SubTitleText,
    TitleText,
} from './LogInStyles'
import { useNavigation } from '@react-navigation/native'

export default function LogIn() {
    const navigation = useNavigation<any>()

    const handlePress = () => {
        navigation.navigate('Main')
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
            }}
        >
            <TitleText>{'SIGMA'}</TitleText>
            <SubTitleText>{'welcome'}</SubTitleText>
            <EmailInput placeholder='snumail' placeholderTextColor={'black'} />
            <PasswordInput
                placeholder='password'
                secureTextEntry={true}
                placeholderTextColor={'black'}
            />
            <LogInButtonContainer onPress={handlePress}>
                <LogInButtonText>{'LOGIN'}</LogInButtonText>
            </LogInButtonContainer>
            <FindAccount onPress={() => console.log('아이디/비밀번호 찾기')}>
                {'아이디 | 비밀번호 찾기'}
            </FindAccount>
        </View>
    )
}
