import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Posts from './Posts'
import PrinterReservation from './PrinterReservation'
import MyPage from './MyPage'

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
                    }) => (
                        <Image
                            source={require('../assets/images/Home.png')}
                            style={{ tintColor: color, width: 31, height: 31 }}
                        />
                    ),
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
                        <Image
                            source={require('../assets/images/Calendar.png')}
                            style={{ tintColor: color, width: 31, height: 31 }}
                        />
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
                    }) => (
                        <Image
                            source={require('../assets/images/Me.png')}
                            style={{ tintColor: color, width: 31, height: 31 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
