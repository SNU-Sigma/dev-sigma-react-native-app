import * as React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

type Props = { navigation: any }

function HomeScreen({ navigation }: Props) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <TextInput placeholder='email' />
            <TextInput placeholder='password' />
            <Button
                title='로그인'
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}

function DetailsScreen({ navigation }: Props) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Details Screen</Text>
            <Button
                title='Go to Details... again'
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}

const Stack = createNativeStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ title: 'Overview' }}
                />
                <Stack.Screen name='Details' component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
