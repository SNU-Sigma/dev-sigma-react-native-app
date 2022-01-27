import { useCallback, useEffect, useMemo, useRef } from 'react'
import { Dimensions, Image, Pressable, StatusBar } from 'react-native'
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

    const handleLeftArrowPress = useCallback(() => {
        const currentIndex = carouselRef.current?.getCurrentIndex()
        if (currentIndex === undefined || currentIndex - 7 < 0) {
            return
        }
        carouselRef.current?.scrollTo({
            count: -7,
            animated: true,
        })
    }, [])

    const handleRightArrowPress = useCallback(() => {
        const currentIndex = carouselRef.current?.getCurrentIndex()
        if (currentIndex === undefined || currentIndex + 7 >= data.length) {
            return
        }
        carouselRef.current?.scrollTo({
            count: 7,
            animated: true,
        })
    }, [data.length])

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
            <HStack>
                <Pressable onPress={handleLeftArrowPress}>
                    <Image
                        source={require('../../assets/images/arrowHead.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </Pressable>
                {carousel}
                <Pressable onPress={handleRightArrowPress}>
                    <Image
                        source={require('../../assets/images/arrowHead.png')}
                        style={{
                            transform: [{ scaleX: -1 }],
                            width: 24,
                            height: 24,
                        }}
                    />
                </Pressable>
            </HStack>
            <HeaderContainer>
                <Header style={{ flex: 1 }}>Time</Header>
                <Header style={{ width: 150 }}>Cubicon 프린터</Header>
                <Header style={{ width: 150 }}>Guider 2 프린터</Header>
            </HeaderContainer>
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

const HeaderContainer = styled.View({
    backgroundColor: '#C1C1C1',
    paddingVertical: 5,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
})

const Header = styled.Text({
    fontSize: 13,
    lineHeight: 15,
    textAlign: 'center',
})

const HStack = styled.View({
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
})
