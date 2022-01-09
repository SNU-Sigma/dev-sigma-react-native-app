import { View, TextInput, Button } from 'react-native'

type LogInProps = {
    onPress: () => void
}

export default function LogIn({ onPress }: LogInProps) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <TextInput placeholder='email' />
            <TextInput placeholder='password' />
            <Button title='로그인' onPress={onPress} />
        </View>
    )
}
