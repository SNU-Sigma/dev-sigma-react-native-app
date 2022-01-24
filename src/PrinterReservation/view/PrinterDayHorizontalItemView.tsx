import Animated, {
    interpolate,
    interpolateColor,
    SharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated'
import { format } from 'date-fns'
import { Pressable } from 'react-native'

type Props = {
    date: Date
    animationValue: SharedValue<number>
    onPress: () => void
}

export default function PrinterDayHorizontalItemView(props: Props) {
    const { date, animationValue, onPress } = props

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
            <Animated.Text style={textAnimatedStyle}>
                {format(date, 'M/d')}
            </Animated.Text>
            <Animated.Text style={textAnimatedStyle}>
                {format(date, 'eee')}
            </Animated.Text>
        </AnimatedPressable>
    )
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
