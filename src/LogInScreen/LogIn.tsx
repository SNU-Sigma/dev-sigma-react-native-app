import { View } from 'react-native'
import {
    TitleText,
    SubTitleText,
    EmailInput,
    PasswordInput,
    LogInButtonContainer,
    LogInButtonText,
    FindAccount,
    ClubDescription,
} from './LogInStyles'

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
            <EmailInput
                placeholder='email'
                textAlign='center'
                placeholderTextColor={'black'}
            />
            <PasswordInput
                placeholder='password'
                secureTextEntry={true}
                textAlign='center'
                placeholderTextColor={'black'}
            />
            <LogInButtonContainer onPress={onPress}>
                <LogInButtonText>{'LOGIN'}</LogInButtonText>
            </LogInButtonContainer>
            <FindAccount onPress={() => console.log('아이디/비밀번호 찾기')}>
                {'아이디/비밀번호 찾기 >'}
            </FindAccount>
            <ClubDescription onPress={() => console.log('동아리소개')}>
                {'동아리 소개'}
            </ClubDescription>
        </View>
    )
}
