import { View } from 'react-native'
import {
    TitleText,
    SubTitleText,
    EmailInput,
    PasswordInput,
    LogInButtonContainer,
    LogInButtonText,
    FindAccount,
} from './LogInStyles'
import '../assets/fonts/SIGMA.png'
import '../assets/fonts/Welcome.png'

type LogInProps = {
    onPress: () => void
}

export default function LogIn({ onPress }: LogInProps) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <TitleText>{'SIGMA'}</TitleText>
            <SubTitleText>{'welcome'}</SubTitleText>
            <EmailInput placeholder='snumail' placeholderTextColor={'black'} />
            <PasswordInput
                placeholder='password'
                secureTextEntry={true}
                placeholderTextColor={'black'}
            />
            <LogInButtonContainer onPress={onPress}>
                <LogInButtonText>{'LOGIN'}</LogInButtonText>
            </LogInButtonContainer>
            <FindAccount onPress={() => console.log('아이디/비밀번호 찾기')}>
                {'아이디 | 비밀번호 찾기'}
            </FindAccount>
        </View>
    )
}
