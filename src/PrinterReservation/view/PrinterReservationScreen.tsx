import { useState } from 'react'
import styled from '@emotion/native'
import { PrinterDayHorizontalSelectionView } from './PrinterDayHorizontalSelectionView'
import { PrinterTimeVerticalSelectionView } from './PrinterTimeVerticalSelectionView'
import { startOfDay } from 'date-fns'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const PrinterReservationScreen = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleSelectedDateChange = (date: Date) => {
        setSelectedDate(date)
    }

    const selectedDateSimplified = startOfDay(selectedDate)

    return (
        <Container>
            <View style={{ flex: 1 }}>
                <PrinterDayHorizontalSelectionView
                    selectedDate={selectedDateSimplified}
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
