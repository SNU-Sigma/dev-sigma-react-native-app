import React, { useState, useEffect, useCallback } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Entypo } from '@expo/vector-icons'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import LogIn from './src/LogInScreen/LogIn'
import Main from './src/MainScreen/Main'
import SplashScreenSIGMA from './src/SplashScreen/SplashScreenSIGMA'
import axios from 'axios'

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}
