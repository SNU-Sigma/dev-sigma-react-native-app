import { useState } from 'react'
import { View, Text, Image } from 'react-native'
import * as style from './styles/PritnerInfoStyles'
import { calculateDay } from './PrinterReservationCalendar'
import { add } from 'date-fns'
import PopUp from '../popup/PopUp'

export default function PrinterInfo({
    Title,
    Start,
    End,
    User,
}: {
    Title?: string
    Start?: Date
    End?: Date
    User?: string
}) {
    const title = Title ? Title : '창의설계축전 준비'
    const start = Start ? Start : new Date()
    const end = End ? End : add(start, { hours: 7 })
    const user = User ? User : '시그마멤버A'

    const startMonth = start.getMonth() + 1
    const startDate = start.getDate()
    const startDay = calculateDay(start.getDay())
    const startNoon = start.getHours() < 12 ? '오전' : '오후'
    const startHour =
        start.getHours() > 12 ? start.getHours() - 12 : start.getHours()
    const startTimeString = `${startMonth}월 ${startDate}일 ${startDay} ${startNoon} ${startHour}:00`

    const endMonth = end.getMonth() + 1
    const endDate = end.getDate()
    const endDay = calculateDay(end.getDay())
    const endNoon = end.getHours() < 12 ? '오전' : '오후'
    const endHour = end.getHours() > 12 ? end.getHours() - 12 : end.getHours()
    var endTimeString = startMonth === endMonth ? '' : `${endMonth}월 `
    endTimeString =
        endTimeString + (startDate === endDate ? '' : `${endDate}일 `)
    endTimeString = endTimeString + (startDay === endDay ? '' : `${endDay} `)
    endTimeString = endTimeString + (startNoon === endNoon ? '' : `${endNoon} `)
    endTimeString = endTimeString + `${endHour}:00`

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View>
            <PopUp visible={modalVisible} setVisible={setModalVisible} />
            <style.X onPress={() => setModalVisible(true)}>
                <Image source={require('../../assets/image/Out.png')} />
            </style.X>
            <style.TitleInfo>{title}</style.TitleInfo>
            <style.DateInfo>
                {startTimeString + ' - ' + endTimeString}
            </style.DateInfo>
            <style.UserInfo>{user}</style.UserInfo>
            <View style={{ marginTop: 22, flexDirection: 'row' }}>
                <style.ModifyButton>
                    <Text>{'수정'}</Text>
                </style.ModifyButton>
                <style.RemoveButton>
                    <Text>{'삭제'}</Text>
                </style.RemoveButton>
            </View>
        </View>
    )
}
