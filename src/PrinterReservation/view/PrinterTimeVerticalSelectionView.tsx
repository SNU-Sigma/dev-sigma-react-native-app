import { PrinterReservationPlan } from '../model/PrinterReservationPlan'
import {
    FlatList,
    ListRenderItem,
    Text,
    View,
    ViewabilityConfigCallbackPair,
    ViewToken,
} from 'react-native'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import {
    addHours,
    addMonths,
    differenceInHours,
    eachHourOfInterval,
    endOfDay,
    format,
    getTime,
    isBefore,
    isSameDay,
    isSameHour,
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

    const currentlyViewableItemsRef = useRef<Array<ViewToken>>([])

    const flatListRef = useRef<FlatList>(null)

    const startDateTimeStamp = getTime(startOfDay(Date.now()))

    const data: Array<Date> = useMemo(() => {
        return eachHourOfInterval({
            start: startDateTimeStamp,
            end: endOfDay(addMonths(startDateTimeStamp, 1)),
        })
    }, [startDateTimeStamp])

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
                        currentlyViewableItemsRef.current = viewableItems

                        const recentlyHiddenDateViewToken = changed.find(
                            (viewToken): boolean => {
                                const { isViewable, key } = viewToken
                                if (isViewable) {
                                    return false
                                }
                                const date = parseISO(key)
                                if (isSameDay(date, addHours(date, 1))) {
                                    // 23시인지 아닌지 검사
                                    return false
                                }
                                const isAboveViewableItems =
                                    viewableItems.every((item) => {
                                        return isBefore(
                                            parseISO(key),
                                            parseISO(item.key),
                                        )
                                    })
                                return isAboveViewableItems
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

    useEffect(() => {
        const isSelectedDateTimeViewable =
            currentlyViewableItemsRef.current.some((item) => {
                return isSameHour(parseISO(item.key), selectedDateTime)
            })
        if (isSelectedDateTimeViewable) {
            return
        }

        flatListRef.current?.scrollToIndex({
            index: differenceInHours(selectedDateTime, startDateTimeStamp, {
                roundingMethod: 'floor',
            }),
            animated: true,
        })
    }, [selectedDateTime, startDateTimeStamp])

    return (
        <FlatList
            ref={flatListRef}
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
