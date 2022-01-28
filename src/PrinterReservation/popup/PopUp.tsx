import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'
import Modal from 'react-native-modal'
import * as style from './PopUpStyles'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function PopUp({
    visible,
    setVisible,
}: {
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}): React.ReactElement {
    return (
        <SafeAreaView>
            <Modal
                isVisible={visible}
                useNativeDriver={true}
                onBackdropPress={() => setVisible(false)}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <style.ModalContainer>
                    <style.ModalView>
                        <Text>{'이 예약을 삭제하시겠어요?'}</Text>
                        <Text>{'지금 삭제하면 이 예약이 사라집니다.'}</Text>
                    </style.ModalView>
                    <style.HorizontalLine />
                    <style.ModalButton
                        onPress={() => {
                            //navigation.goBack()
                            setVisible(false)
                        }}
                    >
                        <Text>{'예약 삭제'}</Text>
                    </style.ModalButton>
                    <style.HorizontalLine />
                    <style.ModalButton
                        onPress={() => {
                            setVisible(false)
                        }}
                    >
                        <Text>{'계속 수정'}</Text>
                    </style.ModalButton>
                </style.ModalContainer>
            </Modal>
        </SafeAreaView>
    )
}
