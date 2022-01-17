import styled from '@emotion/native'

export const TitleText = styled.Text({
    position: 'absolute',
    top: 207,

    fontFamily: 'Ramabhadra',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 36,
    lineHeight: 68,

    color: '#000000',
})

export const SubTitleText = styled.Text({
    position: 'absolute',
    top: 268,

    fontFamily: 'Ramabhadra',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 27,

    color: '#000000',
})

export const FindAccount = styled.Text({
    position: 'absolute',
    top: 452,

    fontFamily: 'Ramabhadra',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 25,

    color: '#000000',
})

export const ClubDescription = styled.Text({
    position: 'absolute',

    top: 588,

    fontFamily: 'Ramabhadra',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 25,

    color: '#000000',
})

export const EmailInput = styled.TextInput({
    position: 'absolute',
    width: 268,
    height: 56,

    top: 312,

    backgroundColor: 'rgba(196, 196, 196, 0.26)',
    borderRadius: 20,
})

export const PasswordInput = styled.TextInput({
    position: 'absolute',
    width: 268,
    height: 56,

    top: 385,

    backgroundColor: '#c4c4c4',
    borderRadius: 20,
})

export const LogInButtonContainer = styled.TouchableOpacity({
    position: 'absolute',
    width: 268,
    height: 41,
    top: 500,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#000000',
    borderRadius: 20,
})

export const LogInButtonText = styled.Text({
    position: 'absolute',

    color: 'white',

    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 27,
})
