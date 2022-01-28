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
    isWithinInterval,
    parseISO,
    startOfDay,
    subMinutes,
} from 'date-fns'
import { formatISO } from 'date-fns/fp'
import { debounce } from 'lodash'
import Spacer from '../../common/view/Spacer'
import styled from '@emotion/native'
import { PrinterReservedTime } from './PrinterReservedTime'

type Props = {
    selectedDateTime: Date
    onSelectedDateTimeChange: (dateTime: Date) => void
    reservations: Array<PrinterReservationPlan>
}

const ITEM_HEIGHT = 72

export const PrinterTimeVerticalSelectionView = (props: Props) => {
    const { selectedDateTime, onSelectedDateTimeChange, reservations } = props

    const currentlyViewableItemsRef = useRef<Array<ViewToken>>([])

    const flatListRef = useRef<FlatList>(null)

    const startDateTimeStamp = getTime(startOfDay(Date.now()))

    const data: Array<Date> = useMemo(() => {
        return eachHourOfInterval({
            start: startDateTimeStamp,
            end: endOfDay(addMonths(startDateTimeStamp, 1)),
        })
    }, [startDateTimeStamp])

    const renderItem: ListRenderItem<Date> = useCallback(
        ({ item }) => {
            const printerOneReservation = reservations
                .filter((reservation) => reservation.printerId === 'printerOne')
                .find((reservation) => {
                    const { start, end } = reservation
                    return isWithinInterval(item, {
                        start,
                        end: subMinutes(end, 1),
                    })
                })

            const printerTwoReservation = reservations
                .filter((reservation) => reservation.printerId === 'printerTwo')
                .find((reservation) => {
                    const { start, end } = reservation
                    return isWithinInterval(item, {
                        start,
                        end: subMinutes(end, 1),
                    })
                })

            return (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        justifyContent: 'flex-end',
                        height: ITEM_HEIGHT,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <Text>{format(item, 'h aa')}</Text>
                    </View>
                    {printerOneReservation !== undefined ? (
                        <PrinterReservedTime
                            reservation={printerOneReservation}
                            isFirstSlot={isSameHour(
                                printerOneReservation.start,
                                item,
                            )}
                        />
                    ) : (
                        <EmptyTime
                            onPress={() => {
                                console.log(item, 'printerOne')
                            }}
                        />
                    )}
                    {printerTwoReservation !== undefined ? (
                        <PrinterReservedTime
                            reservation={printerTwoReservation}
                            isFirstSlot={isSameHour(
                                printerTwoReservation.start,
                                item,
                            )}
                        />
                    ) : (
                        <EmptyTime
                            onPress={() => {
                                console.log(item, 'printerTwo')
                            }}
                        />
                    )}
                    <Spacer width={10} />
                </View>
            )
        },
        [reservations],
    )

    const viewabilityConfigCallbackPairs: Array<ViewabilityConfigCallbackPair> =
        useMemo(
            () => [
                {
                    viewabilityConfig: {
                        itemVisiblePercentThreshold: 0,
                    },
                    onViewableItemsChanged: debounce<
                        Exclude<
                            ViewabilityConfigCallbackPair['onViewableItemsChanged'],
                            null
                        >
                    >(({ changed, viewableItems }) => {
                        currentlyViewableItemsRef.current = viewableItems

                        const recentlyChangedEndOfDayViewToken = changed.find(
                            (viewToken): boolean => {
                                const { key, isViewable } = viewToken
                                const isChangingFromAbove = changed
                                    .filter(
                                        (viewToken) =>
                                            viewToken.isViewable !== isViewable,
                                    )
                                    .every((item) => {
                                        return isBefore(
                                            parseISO(key),
                                            parseISO(item.key),
                                        )
                                    })
                                return isChangingFromAbove
                            },
                        )
                        if (recentlyChangedEndOfDayViewToken !== undefined) {
                            const { key, isViewable } =
                                recentlyChangedEndOfDayViewToken
                            const date = parseISO(key)
                            if (isViewable) {
                                onSelectedDateTimeChange(date)
                            } else {
                                onSelectedDateTimeChange(addHours(date, 1))
                            }
                        }
                    }, 500),
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
        const isSelectedDayViewable = currentlyViewableItemsRef.current.some(
            (item) => {
                return isSameDay(parseISO(item.key), selectedDateTime)
            },
        )
        if (isSelectedDayViewable) {
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

const EmptyTime = styled.Pressable({
    height: '100%',
    width: 150,
    borderColor: '#E0E0E0',
    borderTopWidth: 1,
    borderRightWidth: 1,
    backgroundColor: '#FAFAFA',
})
