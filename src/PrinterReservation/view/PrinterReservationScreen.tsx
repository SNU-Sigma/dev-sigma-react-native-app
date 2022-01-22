import styled from '@emotion/native'
import { PrinterDayHorizontalSelectionView } from './PrinterDayHorizontalSelectionView'
import { PrinterTimeVerticalSelectionView } from './PrinterTimeVerticalSelectionView'

export const PrinterReservationScreen = () => {
    return (
        <Container>
            <PrinterDayHorizontalSelectionView />
            <PrinterTimeVerticalSelectionView />
        </Container>
    )
}

const Container = styled.View({})
