import { useMemo } from 'react'
import { Dimensions, Text, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { CarouselRenderItem } from 'react-native-reanimated-carousel/lib/typescript/types'
import { addDays, eachDayOfInterval, format } from 'date-fns'

type Props = {
    selectedDate: Date
    onSelectedDateChange: (date: Date) => void
}

const renderItem: CarouselRenderItem<Date> = (itemInfo) => {
    const date = itemInfo.item
    return (
        <View
            style={{
                flex: 1,
                marginVertical: 16,
                marginHorizontal: 16,
                backgroundColor: 'white',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
            }}
        >
            <Text>{format(date, 'M/d')}</Text>
            <Text>{format(date, 'eee')}</Text>
        </View>
    )
}

export const PrinterDayHorizontalSelectionView = (props: Props) => {
    const { selectedDate, onSelectedDateChange } = props

    const data: Array<Date> = useMemo(() => {
        return eachDayOfInterval({
            start: selectedDate,
            end: addDays(selectedDate, 30),
        })
    }, [selectedDate])

    return (
        <View>
            <Carousel
                data={data}
                renderItem={renderItem}
                style={{
                    width: Dimensions.get('window').width,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                width={120}
                loop={false}
            />
        </View>
    )
}
