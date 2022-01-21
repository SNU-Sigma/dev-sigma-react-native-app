import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
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
                tabBarShowLabel: false,
                tabBarStyle: { height: 76 },
            }}
        >
            <Tab.Screen
                name='Post'
                component={Post}
                options={{
                    headerShown: false,
                    tabBarIcon: ({
                        color,
                        size,
                    }: {
                        color: any
                        size: any
                    }) => (
                        <MaterialCommunityIcons
                            name='home'
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='PrinterReservation'
                component={PrinterReservation}
                options={{
                    headerShown: false,
                    tabBarIcon: ({
                        color,
                        size,
                    }: {
                        color: any
                        size: any
                    }) => (
                        <MaterialCommunityIcons
                            name='printer'
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='MyPage'
                component={MyPage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({
                        color,
                        size,
                    }: {
                        color: any
                        size: any
                    }) => (
                        <MaterialCommunityIcons
                            name='account'
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
