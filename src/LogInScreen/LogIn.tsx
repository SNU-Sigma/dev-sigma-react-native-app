import { View, TextInput, Button } from 'react-native'
import LogInText from './LogInText'
import LogInInput from './LogInInput'

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
            <LogInInput input={'email'} />
            <LogInInput input={'password'} />
            <Button title='로그인' onPress={onPress} />
        </View>
    )
}
