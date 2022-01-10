import { TextInput } from 'react-native'
import styled from '@emotion/native'

type InputProps = {
    type: string
}

export default function LogInInput({ type }: InputProps) {
    switch (type) {
        case 'email':
            return (
                <EmailInput
                    placeholder='email'
                    textAlign='center'
                    placeholderTextColor={'black'}
                />
            )
        case 'password':
            return (
                <PasswordInput
                    placeholder='password'
                    secureTextEntry={true}
                    textAlign='center'
                    placeholderTextColor={'black'}
                />
            )
        default:
            return <TextInput />
    }
}

const EmailInput = styled.TextInput`
    position: absolute;
    width: 268;
    height: 56;

    top: 312;

    background: #c4c4c4;
    opacity: 0.26;
    border-radius: 20px;
`

const PasswordInput = styled.TextInput`
    position: absolute;
    width: 268;
    height: 56;

    top: 385;

    background: #c4c4c4;
    border-radius: 20px;
`
