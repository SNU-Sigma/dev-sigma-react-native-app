import styled, { css } from '@emotion/native'

type ButtonProps = {
    onPress: () => void
}

export default function LogInButton({ onPress }: ButtonProps) {
    return (
        <LogInButtonContainer onPress={onPress}>
            <LogInButtonText>{'LOGIN'}</LogInButtonText>
        </LogInButtonContainer>
    )
}

const LogInButtonContainer = styled.TouchableOpacity`
    position: absolute;
    width: 268;
    height: 41;
    top: 500;

    background: #000000;
    border-radius: 20px;
`

const LogInButtonText = styled.Text`
    position: absolute;
    left: 165;
    top: 507;

    color: red;

    font-family: Ramabhadra;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 27px;
`
