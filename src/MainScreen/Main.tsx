import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Posts from './Posts'
import PrinterReservation from './PrinterReservation'
import MyPage from './MyPage'
import Home from '../assets/image/Home.png'
import Calendar from '../assets/image/Calendar.png'
import Me from '../assets/image/Me.png'

const Tab = createBottomTabNavigator()

export default function MainScreen() {
    return (
        <Tab.Navigator
            initialRouteName='Post'
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarStyle: { height: 76 },
            }}
        >
            <Tab.Screen
                name='Post'
                component={Posts}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({
                        color,
                        size,
                    }: {
                        color: any
                        size: any
                    }) => <Image source={Home} style={{ tintColor: color }} />,
                }}
            />
            <Tab.Screen
                name='PrinterReservation'
                component={PrinterReservation}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({
                        color,
                        size,
                    }: {
                        color: any
                        size: any
                    }) => (
                        <Image source={Calendar} style={{ tintColor: color }} />
                    ),
                }}
            />
            <Tab.Screen
                name='MyPage'
                component={MyPage}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({
                        color,
                        size,
                    }: {
                        color: any
                        size: any
                    }) => <Image source={Me} style={{ tintColor: color }} />,
                }}
            />
        </Tab.Navigator>
    )
}
