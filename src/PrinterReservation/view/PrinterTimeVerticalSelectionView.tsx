import { PrinterReservationPlan } from '../model/PrinterReservationPlan'
import {
    FlatList,
    ListRenderItem,
    Text,
    View,
    ViewabilityConfigCallbackPair,
} from 'react-native'
import { useCallback, useMemo } from 'react'
import {
    addHours,
    addMonths,
    eachHourOfInterval,
    endOfDay,
    format,
    isSameDay,
    parseISO,
    startOfDay,
} from 'date-fns'
import { formatISO } from 'date-fns/fp'

type Props = {
    selectedDateTime: Date
    onSelectedDateTimeChange: (dateTime: Date) => void
    reservations: Array<PrinterReservationPlan>
}

const ITEM_HEIGHT = 72

export const PrinterTimeVerticalSelectionView = (props: Props) => {
    const { selectedDateTime, onSelectedDateTimeChange } = props

    const data: Array<Date> = useMemo(() => {
        return eachHourOfInterval({
            start: startOfDay(Date.now()),
            end: endOfDay(addMonths(Date.now(), 1)),
        })
    }, [])

    const renderItem: ListRenderItem<Date> = useCallback(({ item }) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#E0E0E0',
                    justifyContent: 'flex-end',
                    height: ITEM_HEIGHT,
                }}
            >
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        alignItems: 'flex-end',
                        paddingRight: 8,
                        backgroundColor: 'white',
                    }}
                >
                    <Text>{format(item, 'haa')}</Text>
                </View>
                <View
                    style={{
                        height: '100%',
                        width: 150,
                        marginTop: 1,
                        marginRight: 0.5,
                        backgroundColor: 'white',
                    }}
                />
                <View
                    style={{
                        height: '100%',
                        width: 150,
                        marginTop: 1,
                        marginLeft: 0.5,
                        backgroundColor: 'white',
                    }}
                />
            </View>
        )
    }, [])

    const viewabilityConfigCallbackPairs: Array<ViewabilityConfigCallbackPair> =
        useMemo(
            () => [
                {
                    viewabilityConfig: {
                        itemVisiblePercentThreshold: 0,
                    },
                    onViewableItemsChanged: ({ changed, viewableItems }) => {
                        const recentlyHiddenDateViewToken = changed.find(
                            (viewToken) => {
                                const { isViewable, key } = viewToken
                                const date = parseISO(key)
                                const isDateOtherHoursViewable =
                                    viewableItems.some((viewToken) => {
                                        return isSameDay(
                                            parseISO(viewToken.key),
                                            date,
                                        )
                                    })
                                return (
                                    isViewable === false &&
                                    isDateOtherHoursViewable === false
                                )
                            },
                        )
                        if (recentlyHiddenDateViewToken !== undefined) {
                            const { key } = recentlyHiddenDateViewToken
                            const date = parseISO(key)
                            onSelectedDateTimeChange(addHours(date, 1))
                        }
                    },
                },
            ],
            [onSelectedDateTimeChange],
        )

    const getItemLayout = useCallback(
        (_, index) => ({
            index,
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
        }),
        [],
    )

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            getItemLayout={getItemLayout}
            keyExtractor={formatISO}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<View style={{ height: 16 }} />}
            viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs}
        />
    )
}
