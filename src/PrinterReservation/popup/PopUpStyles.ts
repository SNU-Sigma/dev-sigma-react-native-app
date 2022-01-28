import styled from '@emotion/native'

export const ModalContainer = styled.View({
    flexDirection: 'column',
    alignItems: 'center',
    width: 285,
    height: 200,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
})

export const ModalView = styled.View({
    height: 72,
    width: 285,
    justifyContent: 'center',
    alignItems: 'center',
})

export const ModalButton = styled.TouchableOpacity({
    width: 285,
    height: 63,
    justifyContent: 'center',
    alignItems: 'center',
})

export const HorizontalLine = styled.View({
    backgroundColor: '#C1C1C1',
    height: 1,
    width: '100%',
    alignSelf: 'center',
})
