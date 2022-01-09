import * as React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from './src/LogInScreen/LogIn'
import Home from './src/HomeScreen/Home'

type Props = { navigation: any }

function LogInScreen({ navigation }: Props) {
    return <LogIn onPress={() => navigation.navigate('Home')} />
}

const Stack = createNativeStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='LogIn'
                    component={LogInScreen}
                    options={{ title: 'Overview' }}
                />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
