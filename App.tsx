import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from './src/LogInScreen/LogIn'
import Main from './src/MainScreen/Main'
import PostDetail from './src/PostDetail/PostDetail'

type Props = { navigation: any }

function LogInScreen({ navigation }: Props) {
    return <LogIn onPress={() => navigation.navigate('Main')} />
}

const Stack = createNativeStackNavigator()

function App() {
    return (
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
    )
}

export default App
