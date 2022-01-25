import styled from '@emotion/native'
import { ActivityIndicator, useWindowDimensions } from 'react-native'

type Props = {
    isLoading: boolean
}

export default function Spinner(props: Props) {
    const { isLoading } = props

    return (
        <>
            {isLoading && (
                <SpinnerContainer>
                    <ActivityIndicator
                        animating={isLoading}
                        size='large'
                        color='#000000'
                    />
                </SpinnerContainer>
            )}
        </>
    )
}

const SpinnerContainer = styled.View(() => {
    const { height, width } = useWindowDimensions()

    return {
        position: 'absolute',
        zIndex: 10000,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        height,
        width,
    }
})
