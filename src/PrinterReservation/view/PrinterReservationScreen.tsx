import { useCallback, useState } from 'react'
import styled from '@emotion/native'
import { PrinterDayHorizontalSelectionView } from './PrinterDayHorizontalSelectionView'
import { PrinterTimeVerticalSelectionView } from './PrinterTimeVerticalSelectionView'
import { addDays, differenceInCalendarDays, startOfDay } from 'date-fns'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const PrinterReservationScreen = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const selectedDateUntilDay = startOfDay(selectedDate)

    const handleSelectedDateChange = useCallback((date: Date) => {
        setSelectedDate((prevDate) => {
            return addDays(prevDate, differenceInCalendarDays(date, prevDate))
        })
    }, [])

    return (
        <Container>
            <View style={{ flex: 1 }}>
                <PrinterDayHorizontalSelectionView
                    selectedDate={selectedDateUntilDay}
                    onSelectedDateChange={handleSelectedDateChange}
                />
            </View>
            <View style={{ flex: 2, backgroundColor: 'white', width: '100%' }}>
                <PrinterTimeVerticalSelectionView
                    selectedDateTime={selectedDate}
                    onSelectedDateTimeChange={setSelectedDate}
                    reservations={[]}
                />
            </View>
        </Container>
    )
}

const Container = styled(SafeAreaView)({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
})
