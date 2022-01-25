import { useCallback, useEffect, useMemo, useRef } from 'react'
import { Dimensions, StatusBar } from 'react-native'
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
    lightFormat,
    startOfDay,
} from 'date-fns'
import PrinterDayHorizontalItemView from './PrinterDayHorizontalItemView'
import { debounce } from 'lodash'
import styled from '@emotion/native'
import Spacer from '../../common/view/Spacer'

type Props = {
    selectedDate: Date
    onSelectedDateChange: (date: Date) => void
}

export const PrinterDayHorizontalSelectionView = (props: Props) => {
    const { selectedDate, onSelectedDateChange } = props

    const handleSelectedChange = useMemo(
        () => debounce(onSelectedDateChange, 100),
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

    const generalDate = useMemo(
        () =>
            `${lightFormat(selectedDate, 'yyyy')}년 ${lightFormat(
                selectedDate,
                'MM',
            )}월`,
        [selectedDate],
    )

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
                    width: Dimensions.get('window').width - 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                }}
                windowSize={7}
                width={52}
                height={72}
                loop={false}
                onSnapToItem={handleSnapToItem}
            />
        ),
        [data, handleSnapToItem, renderItem],
    )

    return (
        <Container>
            <StatusBar backgroundColor='#C1C1C1' />
            <Spacer height={10} />
            <Title>SIGMA 3D PRINTER</Title>
            <GeneralDate>{generalDate}</GeneralDate>
            <Spacer height={4} />
            {carousel}
        </Container>
    )
}

const Container = styled.View({
    height: 160,
    width: '100%',
    backgroundColor: '#C1C1C1',
})

const Title = styled.Text({
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 27,
    marginLeft: 20,
})

const GeneralDate = styled.Text({
    fontSize: 13,
    lineHeight: 15,
    marginLeft: 20,
})
