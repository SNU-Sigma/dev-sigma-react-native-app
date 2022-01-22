import { useState } from 'react'
import styled from '@emotion/native'
import { PrinterDayHorizontalSelectionView } from './PrinterDayHorizontalSelectionView'
import { PrinterTimeVerticalSelectionView } from './PrinterTimeVerticalSelectionView'
import { startOfDay } from 'date-fns'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const PrinterReservationScreen = () => {
    const [selectedDate, setSelectedDate] = useState(startOfDay(Date.now()))

    const handleSelectedDateChange = (date: Date) => {
        setSelectedDate(date)
    }

    return (
        <Container>
            <View style={{ flex: 1 }}>
                <PrinterDayHorizontalSelectionView
                    selectedDate={selectedDate}
                    onSelectedDateChange={handleSelectedDateChange}
                />
            </View>
            <View style={{ flex: 2 }}>
                <PrinterTimeVerticalSelectionView />
            </View>
        </Container>
    )
}

const Container = styled(SafeAreaView)({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
})
