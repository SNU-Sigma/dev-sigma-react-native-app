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
            <Stack.Navigator>
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
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
