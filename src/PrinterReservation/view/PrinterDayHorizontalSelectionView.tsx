import { useMemo } from 'react'
import { Dimensions, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { CarouselRenderItem } from 'react-native-reanimated-carousel/lib/typescript/types'
import { addDays, eachDayOfInterval, format } from 'date-fns'
import Animated, {
    interpolate,
    interpolateColor,
    useAnimatedStyle,
} from 'react-native-reanimated'

type Props = {
    selectedDate: Date
    onSelectedDateChange: (date: Date) => void
}

const RenderItem: CarouselRenderItem<Date> = (itemInfo) => {
    const date = itemInfo.item
    const { animationValue } = itemInfo

    const viewAnimatedStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            animationValue.value,
            [-1, 0, 1],
            ['white', 'blue', 'white'],
        )

        return {
            backgroundColor,
        }
    }, [animationValue])

    const textAnimatedStyle = useAnimatedStyle(() => {
        const color = interpolateColor(
            animationValue.value,
            [-1, 0, 1],
            ['black', 'white', 'black'],
        )

        const fontSize = interpolate(
            animationValue.value,
            [-1, 0, 1],
            [12, 16, 12],
        )

        return {
            color,
            fontSize,
        }
    }, [animationValue])

    return (
        <Animated.View
            style={[
                {
                    flex: 1,
                    marginVertical: 16,
                    marginHorizontal: 16,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                },
                viewAnimatedStyle,
            ]}
        >
            <Animated.Text style={textAnimatedStyle}>
                {format(date, 'M/d')}
            </Animated.Text>
            <Animated.Text style={textAnimatedStyle}>
                {format(date, 'eee')}
            </Animated.Text>
        </Animated.View>
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
                renderItem={RenderItem}
                style={{
                    width: Dimensions.get('window').width,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                windowSize={5} // 퍼포먼스 증가 위한 prop - 한 번에 5개만 렌더
                width={120}
                loop={false}
            />
        </View>
    )
}
