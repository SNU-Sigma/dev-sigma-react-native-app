import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function App() {
    const onPress = () => {}
    return (
        <View>
            <TextInput />
            <TextInput />
            <Button title='버튼' onPress={onPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
