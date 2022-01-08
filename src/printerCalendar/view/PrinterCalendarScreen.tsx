import styled from '@emotion/native'
import { PrinterDayHorizontalSelectionView } from './PrinterDayHorizontalSelectionView'
import { PrinterTimeVerticalSelectionView } from './PrinterTimeVerticalSelectionView'

export const PrinterCalendarScreen = () => {
    return (
        <Container>
            <PrinterDayHorizontalSelectionView />
            <PrinterTimeVerticalSelectionView />
        </Container>
    )
}

const Container = styled.View({})
