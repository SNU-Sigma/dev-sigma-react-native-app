import { useCallback, useEffect, useMemo, useRef } from 'react'
import { Dimensions, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import {
    CarouselRenderItem,
    ICarouselInstance,
} from 'react-native-reanimated-carousel/lib/typescript/types'
import {
    addDays,
    addMonths,
    differenceInCalendarDays,
    eachDayOfInterval,
    getTime,
    isWithinInterval,
    startOfDay,
} from 'date-fns'
import PrinterDayHorizontalItemView from './PrinterDayHorizontalItemView'
import { debounce } from 'lodash'

type Props = {
    selectedDate: Date
    onSelectedDateChange: (date: Date) => void
}

export const PrinterDayHorizontalSelectionView = (props: Props) => {
    const { selectedDate, onSelectedDateChange } = props

    const handleSelectedChange = useMemo(
        () => debounce(onSelectedDateChange, 500),
        [onSelectedDateChange],
    )

    const carouselRef = useRef<ICarouselInstance>(null)

    const startDateTimeStamp = getTime(startOfDay(Date.now()))

    const interval: Interval = useMemo(
        () => ({
            start: startDateTimeStamp,
            end: addMonths(startDateTimeStamp, 1),
        }),
        [startDateTimeStamp],
    )

    const data: Array<Date> = useMemo(() => {
        return eachDayOfInterval(interval)
    }, [interval])

    const handleSnapToItem = useCallback(
        (index: number) => {
            handleSelectedChange(addDays(startDateTimeStamp, index))
        },
        [handleSelectedChange, startDateTimeStamp],
    )

    const renderItem: CarouselRenderItem<Date> = useCallback((itemInfo) => {
        const { item, animationValue } = itemInfo

        const handlePress = () => {
            carouselRef.current?.scrollTo({
                count: animationValue.value,
                animated: true,
            })
        }

        return (
            <PrinterDayHorizontalItemView
                date={item}
                animationValue={animationValue}
                onPress={handlePress}
            />
        )
    }, [])

    useEffect(() => {
        const index = differenceInCalendarDays(selectedDate, startDateTimeStamp)
        const currentIndex = carouselRef.current?.getCurrentIndex()
        if (currentIndex === index || currentIndex === undefined) {
            return
        }
        if (isWithinInterval(selectedDate, interval)) {
            carouselRef.current?.scrollTo({
                count: index - currentIndex,
                animated: true,
            })
        }
    }, [interval, selectedDate, startDateTimeStamp])

    const carousel = useMemo(
        () => (
            <Carousel
                ref={carouselRef}
                data={data}
                renderItem={renderItem}
                style={{
                    width: Dimensions.get('window').width,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                windowSize={5} // 퍼포먼스 증가 위한 prop - 한 번에 5개만 렌더
                width={120}
                loop={false}
                onSnapToItem={handleSnapToItem}
            />
        ),
        [data, handleSnapToItem, renderItem],
    )

    return <View>{carousel}</View>
}
