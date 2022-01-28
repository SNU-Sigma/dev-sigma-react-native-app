import { useCallback, useEffect, useState } from 'react'
import styled from '@emotion/native'
import { PrinterDayHorizontalSelectionView } from './PrinterDayHorizontalSelectionView'
import { PrinterTimeVerticalSelectionView } from './PrinterTimeVerticalSelectionView'
import { addDays, differenceInCalendarDays, startOfDay } from 'date-fns'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAsync } from 'react-async'
import { PrinterAPI } from '../../service/PrinterAPI'
import Spinner from '../../common/view/Spinner'
import { useIsFocused } from '@react-navigation/native'

export const PrinterReservationScreen = () => {
    const { run, isLoading, data } = useAsync({
        promiseFn: PrinterAPI.getReservations,
        deferFn: PrinterAPI.getReservations,
    })

    const isFocused = useIsFocused()

    const [selectedDate, setSelectedDate] = useState(new Date())

    const selectedDateUntilDay = startOfDay(selectedDate)

    const handleSelectedDateChange = useCallback((date: Date) => {
        setSelectedDate((prevDate) => {
            return addDays(prevDate, differenceInCalendarDays(date, prevDate))
        })
    }, [])

    useEffect(() => {
        if (isFocused) {
            run()
        }
    }, [isFocused, run])

    return (
        <Container>
            <Spinner isLoading={isLoading} />
            <PrinterDayHorizontalSelectionView
                selectedDate={selectedDateUntilDay}
                onSelectedDateChange={handleSelectedDateChange}
            />
            <View style={{ flex: 1, backgroundColor: 'white', width: '100%' }}>
                <PrinterTimeVerticalSelectionView
                    selectedDateTime={selectedDate}
                    onSelectedDateTimeChange={setSelectedDate}
                    reservations={data ?? []}
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
