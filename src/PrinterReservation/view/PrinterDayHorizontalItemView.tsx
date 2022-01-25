import Animated, {
    interpolateColor,
    SharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated'
import { format } from 'date-fns'
import { Pressable, Text } from 'react-native'

type Props = {
    date: Date
    animationValue: SharedValue<number>
    onPress: () => void
}

const WEEK_DAY = ['일', '월', '화', '수', '목', '금', '토']

export default function PrinterDayHorizontalItemView(props: Props) {
    const { date, animationValue, onPress } = props

    const viewAnimatedStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            animationValue.value,
            [-1, 0, 1],
            ['white', 'rgba(250, 255, 2, 1)', 'white'],
            'RGB',
        )

        return {
            backgroundColor,
        }
    }, [animationValue])

    return (
        <AnimatedPressable
            style={[
                {
                    flex: 1,
                    marginVertical: 10,
                    marginHorizontal: 8,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 32,
                },
                viewAnimatedStyle,
            ]}
            onPress={onPress}
        >
            <Text>{format(date, 'd')}</Text>
            <Text>{WEEK_DAY[date.getDay()]}</Text>
        </AnimatedPressable>
    )
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
