import styled from '@emotion/native'

export const TitleText = styled.Text({
    position: 'absolute',

    height: 68,
    top: 242,

    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 36,
    lineHeight: 68,

    color: '#000000',
})

export const SubTitleText = styled.Text({
    position: 'absolute',
    height: 27,
    top: 297,

    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 27,

    color: '#000000',
})

export const FindAccount = styled.Text({
    position: 'absolute',
    height: 25,
    top: 553,

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
    height: 46,

    top: 374,

    backgroundColor: 'rgba(193, 193, 193, 1)',
    borderRadius: 13,
})

export const PasswordInput = styled.TextInput({
    position: 'absolute',
    width: 268,
    height: 46,

    top: 434,

    backgroundColor: 'rgba(193,193,193,1)',
    borderRadius: 13,
})

export const LogInButtonContainer = styled.TouchableOpacity({
    position: 'absolute',
    width: 268,
    height: 41,
    top: 494,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#000000',
    borderRadius: 13,
})

export const LogInButtonText = styled.Text({
    position: 'absolute',

    color: 'white',

    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 34,
})
