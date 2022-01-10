import { TextInput } from 'react-native'
import styled from '@emotion/native'

type InputProps = {
    input: string
}

export default function LogInInput({ input }: InputProps) {
    switch (input) {
        case 'email':
            return <EmailInput placeholder='email' />
        case 'password':
            return <PasswordInput placeholder='password' />
        default:
            return <TextInput />
    }
}

const EmailInput = styled.TextInput`
    position: absolute;
    width: 268;
    height: 56;
    left: 53;
    top: 312;

    background: #c4c4c4;
    opacity: 0.26;
    border-radius: 86;
`

const PasswordInput = styled.TextInput`
    position: absolute;
    width: 268;
    height: 56;
    left: 53;
    top: 385;

    background: #c4c4c4;
    border-radius: 86;
`
