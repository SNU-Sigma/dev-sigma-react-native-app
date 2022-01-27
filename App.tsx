import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from './src/LogInScreen/LogIn'
import Main from './src/MainScreen/Main'
import PostDetail from './src/PostDetailScreen/PostDetail'
import PostWrite from './src/PostWriteScreen/PostWrite'
import PrinterReservationCalendar from './src/PrinterReservation/view/PrinterReservationCalendar'
import PrinterInfo from './src/PrinterReservation/view/PrinterInfo'

export default function App() {
    //return <PrinterReservationCalendar />
    return <PrinterInfo />
}

/*
type Props = { navigation: any }

function LogInScreen({ navigation }: Props) {
    return <LogIn onPress={() => navigation.navigate('Main')} />
}

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
                    <Stack.Screen
                        name='LogIn'
                        component={LogIn}
                        options={{ title: 'Overview', headerShown: false }}
                    />
                    <Stack.Screen
                        name='Main'
                        component={Main}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='PostDetail'
                        component={PostDetail}
                        options={{
                            headerBackVisible: true,
                            title: '게시물',
                            headerTitleAlign: 'center',
                        }}
                    />
                    <Stack.Screen
                        name='PostWrite'
                        component={PostWrite}
                        options={{
                            headerBackVisible: true,
                            title: '게시물 만들기',
                            headerTitleAlign: 'center',
                            headerStyle: {
                                backgroundColor: '#FAFF02',
                            },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}

export default App
*/
