import { useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import * as style from './styles/PrinterReservationStyles'
import { add, parseISO } from 'date-fns'
import PopUp from '../popup/PopUp'
import Spinner from '../../common/view/Spinner'
import { PrinterAPI } from '../../service/PrinterAPI'

export const calculateDay = (n: number) => {
    switch (n) {
        case 0:
            return '일요일'
        case 1:
            return '월요일'
        case 2:
            return '화요일'
        case 3:
            return '수요일'
        case 4:
            return '목요일'
        case 5:
            return '금요일'
        case 6:
            return '토요일'
    }
}

export default function PrinterReservationCalendar({
    navigation,
    route,
}: {
    navigation?: any
    route?: any
}) {
    const [modalVisible, setModalVisible] = useState(false)
    const onOutHandler = () => setModalVisible(true)

    const Start: Date = parseISO(route.params.startTime)
    const startMonth = Start.getMonth() + 1
    const startDate = Start.getDate()
    const startDay = calculateDay(Start.getDay())
    const startNoon = Start.getHours() < 12 ? '오전' : '오후'
    const startHour =
        Start.getHours() > 12 ? Start.getHours() - 12 : Start.getHours()
    const startTimeString = `시작 | ${startMonth}월 ${startDate}일 ${startDay} ${startNoon} ${startHour}:00`

    const [End, setEnd] = useState<Date>(Start)
    const endMonth = End.getMonth() + 1
    const endDate = End.getDate()
    const endDay = calculateDay(End.getDay())
    const endNoon = End.getHours() < 12 ? '오전' : '오후'
    const endHour = End.getHours() > 12 ? End.getHours() - 12 : End.getHours()
    const endTimeString =
        startHour === endHour
            ? '종료 | 시간을 설정해주세요'
            : `종료 | ${endMonth}월 ${endDate}일 ${endDay} ${endNoon} ${endHour}:00`

    const [list1, setList1] = useState([
        { id: 1, focused: false },
        { id: 2, focused: false },
        { id: 3, focused: false },
        { id: 4, focused: false },
    ])
    const [list2, setList2] = useState([
        { id: 5, focused: false },
        { id: 6, focused: false },
        { id: 7, focused: false },
        { id: 8, focused: false },
    ])

    const [title, setTitle] = useState('')
    const [user, setUser] = useState('')

    const cautions = [
        '1. 프린터는 최대 8시간까지 예약 후 사용하실 수 있습니다.',
        '2. 장시간 사용이 필요할 경우 시그마 임원진에게 연락해주세요.',
        '3. 프린터 사용시에는 동아리 방의 창문을 열어서 환기를 부탁드립니다.',
    ]

    const [isLoading, setIsLoading] = useState(false)
    const onSave = () => {
        setIsLoading(true)
        PrinterAPI.postReservation({
            title,
            start: Start,
            end: End,
            authorName: user,
            printerId: route.params.printerId,
        })
            .then(() => {
                navigation.goBack()
            })
            .catch((e) => {
                alert(e)
                console.log(e)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View>
                <PopUp visible={modalVisible} setVisible={setModalVisible} />
                <style.X onPress={onOutHandler}>
                    <Image source={require('../../assets/image/Out.png')} />
                </style.X>
                <style.Title>{'제목'}</style.Title>
                <style.TitleInput
                    placeholder={'제목을 입력하세요...'}
                    placeholderTextColor={'rgba(189,189,189,1)'}
                    value={title}
                    onChangeText={setTitle}
                />
                <style.Boundary1 />
                <style.TimeText>{'시간'}</style.TimeText>
                <style.StartTimeText>{startTimeString}</style.StartTimeText>
                <style.EndTimeText>{endTimeString}</style.EndTimeText>
                <FlatList
                    style={{ marginTop: 14, marginLeft: 23 }}
                    horizontal={true}
                    data={list1}
                    renderItem={({ item }) => (
                        <style.SelectedTimeText
                            isSelected={item.focused}
                            hitSlop={{ top: 1, bottom: 1, left: 1, right: 1 }}
                            onPress={() => {
                                setEnd(add(Start, { hours: item.id }))
                                var list_1 = list1
                                list_1.map((it) => {
                                    if (it.id === item.id) it.focused = true
                                    else it.focused = false
                                })
                                setList1(list_1)
                                var list_2 = list2
                                list_2.map((it) => {
                                    it.focused = false
                                })
                                setList2(list_2)
                            }}
                        >
                            <Text>{`${item.id}시간`}</Text>
                        </style.SelectedTimeText>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
                <FlatList
                    style={{ marginTop: 14, marginLeft: 23 }}
                    horizontal={true}
                    data={list2}
                    renderItem={({ item }) => (
                        <style.SelectedTimeText
                            isSelected={item.focused}
                            hitSlop={{ top: 1, bottom: 1, left: 1, right: 1 }}
                            onPress={() => {
                                setEnd(add(Start, { hours: item.id }))
                                var list_2 = list2
                                list_2.map((it) => {
                                    if (it.id === item.id) it.focused = true
                                    else it.focused = false
                                })
                                setList2(list_2)
                                var list_1 = list1
                                list_1.map((it) => {
                                    it.focused = false
                                })
                                setList1(list_1)
                            }}
                        >
                            <Text>{`${item.id}시간`}</Text>
                        </style.SelectedTimeText>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
                <style.Boundary2 />
                <style.UserText>{'사용자'}</style.UserText>
                <style.TitleInput
                    placeholder={'이름을 입력하세요...'}
                    placeholderTextColor={'rgba(189,189,189,1)'}
                    value={user}
                    onChangeText={setUser}
                />
                <style.CautionText>
                    {'프린터 사용시 주의사항'}
                </style.CautionText>
                <FlatList
                    style={{ marginTop: 20, marginLeft: 28 }}
                    data={cautions}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    keyExtractor={(item) => item}
                />
                <style.SaveButton
                    onPress={onSave}
                    disabled={
                        !(title !== '' && user !== '' && startHour !== endHour)
                    }
                >
                    <Text>{'저장'}</Text>
                </style.SaveButton>
                <Spinner isLoading={isLoading} />
            </View>
        </View>
    )
}
