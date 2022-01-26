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
import { useState } from 'react'

export default function LogIn() {
    const navigation = useNavigation<any>()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlePress = () => {
        console.log(email, password)
        // LoginAPI.login({})
        // navigation.navigate('Main')
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
            <EmailInput
                placeholder='snumail'
                placeholderTextColor={'black'}
                value={email}
                onChangeText={setEmail}
            />
            <PasswordInput
                placeholder='password'
                secureTextEntry={true}
                placeholderTextColor={'black'}
                value={password}
                onChangeText={setPassword}
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
