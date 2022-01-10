import { Text } from 'react-native'
import styled from '@emotion/native'

type TextProps = {
    type: string
    text: string
}

export default function LogInText({ type, text }: TextProps) {
    switch (type) {
        case 'Title':
            return <TitleText>{text}</TitleText>
        case 'SubTitle':
            return <SubTitleText>{text}</SubTitleText>

        default:
            return <Text>{text}</Text>
    }
}

const TitleText = styled.Text`
    position: absolute;
    width: 118;
    height: 68;
    left: 136;
    top: 207;

    font-family: 'Ramabhadra';
    font-style: normal;
    font-weight: normal;
    font-size: 36;
    line-height: 68;

    color: #000000;
`
// style은 항상 대문자로 시작해야 한대요...
const SubTitleText = styled.Text`
    position: absolute;
    width: 60;
    height: 27;
    left: 157;
    top: 268;

    font-family: 'Ramabhadra';
    font-style: normal;
    font-weight: normal;
    font-size: 14;
    line-height: 27;

    color: #000000;
`
