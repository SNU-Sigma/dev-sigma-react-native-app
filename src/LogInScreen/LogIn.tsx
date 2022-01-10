import { View, Button } from 'react-native'
import LogInText from './LogInText'
import LogInInput from './LogInInput'
import LogInButton from './LogInButton'

type LogInProps = {
    onPress: () => void
}

export default function LogIn({ onPress }: LogInProps) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <LogInText type={'Title'} text={'SIGMA'} />
            <LogInText type={'SubTitle'} text={'welcome'} />
            <LogInInput type={'email'} />
            <LogInInput type={'password'} />
            <LogInButton onPress={onPress} />
            <LogInText
                type={'FindAccount'}
                onPress={() => console.log('아이디/비밀번호 찾기')}
                text={'아이디/비밀번호 찾기 >'}
            />
            <LogInText
                type={'ClubDescription'}
                onPress={() => console.log('동아리소개')}
                text={'동아리 소개'}
            />
        </View>
    )
}
