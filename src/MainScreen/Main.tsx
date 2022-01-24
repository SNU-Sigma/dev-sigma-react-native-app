import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Post from './Post'
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
                component={Post}
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
                            source={require('../assets/image/Home.png')}
                            style={{ tintColor: color }}
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
                            source={require('../assets/image/Calendar.png')}
                            style={{ tintColor: color }}
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
                            source={require('../assets/image/Me.png')}
                            style={{ tintColor: color }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
