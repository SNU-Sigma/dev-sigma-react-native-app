import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from './src/LogInScreen/LogIn'
import Main from './src/MainScreen/Main'
import PostDetail from './src/PostDetailScreen/PostDetail'

type Props = { navigation: any }

function LogInScreen({ navigation }: Props) {
    return (
        <LogIn
            onPress={() => {
                navigation.navigate('Main')
            }}
        />
    )
}

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
                    <Stack.Screen
                        name='LogIn'
                        component={LogInScreen}
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
                            title: '게시물', //item.author 를 가져올 수 있으면 좋겠네요.. ㅎㅎ
                            headerTitleAlign: 'center',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}
