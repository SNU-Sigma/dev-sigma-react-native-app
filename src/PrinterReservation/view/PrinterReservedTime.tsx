import styled from '@emotion/native'
import { PrinterReservationPlan } from '../model/PrinterReservationPlan'
import { LoginAPI } from '../../service/LoginAPI'
import { ColorValue, View } from 'react-native'
import { lightFormat } from 'date-fns'

type Props = {
    isFirstSlot: boolean
    reservation: PrinterReservationPlan
}

export const PrinterReservedTime = (props: Props) => {
    const { reservation, isFirstSlot } = props

    const { title, authorName, start, end } = reservation

    const isMine = reservation.authorName === LoginAPI.getUserName()

    const backgroundColor: ColorValue = isMine ? '#DF74384D' : '#C1C1C199'
    const highlightColor: ColorValue = isMine ? '#FF7648' : '#939393'

    return (
        <Container backgroundColor={backgroundColor}>
            <View style={{ width: 3, backgroundColor: highlightColor }} />
            {isFirstSlot && (
                <TextContainer>
                    <Title>{title}</Title>
                    <Detail>
                        {lightFormat(start, 'h:mm a')} ~{' '}
                        {lightFormat(end, 'h:mm a')}
                    </Detail>
                    <Detail>{authorName}</Detail>
                </TextContainer>
            )}
        </Container>
    )
}

const Container = styled.View<{
    backgroundColor: ColorValue
}>((props) => ({
    height: '100%',
    width: 150,
    backgroundColor: props.backgroundColor,
    flexDirection: 'row',
}))

const TextContainer = styled.View({
    marginTop: 6,
    marginLeft: 6,
})

const Title = styled.Text({
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 16,
})

const Detail = styled.Text({
    fontSize: 12,
    lineHeight: 16,
})
