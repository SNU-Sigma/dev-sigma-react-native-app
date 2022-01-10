import { Text } from 'react-native'
import styled from '@emotion/native'

type TextProps = {
    type: string
    text: string
    onPress?: () => void
}

export default function LogInText({ type, text, onPress }: TextProps) {
    switch (type) {
        case 'Title':
            return <TitleText>{text}</TitleText>
        case 'SubTitle':
            return <SubTitleText>{text}</SubTitleText>
        case 'FindAccount':
            return <FindAccount onPress={onPress}>{text}</FindAccount>
        case 'ClubDescription':
            return <ClubDescription onPress={onPress}>{text}</ClubDescription>
        default:
            return <Text>{text}</Text>
    }
}

const TitleText = styled.Text`
    position: absolute;
    top: 207px;
    justifycontent: center;

    font-family: Ramabhadra;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 68px;

    color: #000000;
`
// style은 항상 대문자로 시작해야 한대요...
const SubTitleText = styled.Text`
    position: absolute;
    justifycontent: center;
    top: 268;

    font-family: Ramabhadra;
    font-style: normal;
    font-weight: normal;
    font-size: 14;
    line-height: 27;

    color: #000000;
`

const FindAccount = styled.Text`
    position: absolute;
    justifycontent: center;
    top: 452;

    font-family: Ramabhadra;
    font-style: normal;
    font-weight: normal;
    font-size: 13;
    line-height: 25;

    color: #000000;
`

const ClubDescription = styled.Text`
    position: absolute;
    justifycontent: center;
    top: 588;

    font-family: Ramabhadra;
    font-style: normal;
    font-weight: normal;
    font-size: 13;
    line-height: 25;

    color: #000000;
`
