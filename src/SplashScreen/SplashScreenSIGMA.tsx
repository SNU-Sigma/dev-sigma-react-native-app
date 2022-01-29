import { View } from 'react-native'
import { Mark, Title } from './SplashScreenStyles'

export default function SplashScreenSIGMA() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Mark
                source={require('../assets/images/Mark.png')}
                style={{ width: 86, height: 86, borderRadius: 43 }}
            />
            <Title>{'SIGMA'}</Title>
        </View>
    )
}
