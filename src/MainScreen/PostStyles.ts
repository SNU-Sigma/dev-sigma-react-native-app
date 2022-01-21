import styled from '@emotion/native'

export const TitleText = styled.Text({
    paddingLeft: 6,
    paddingBottom: 7,
    fontSize: 14,
    fontWeight: 'bold',
})

export const PostView = styled.View({
    width: 335,
    height: 267,
    marginBottom: 16,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowRadius: 9,
    shadowOffset: { width: 3, height: 4 },
})

export const AdminImage = styled.Image({
    position: 'absolute',
    top: 3,
    left: 48,
    width: 21,
    height: 21,
})

export const ProfileView = styled.View({
    height: 42,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
})

export const ContentText = styled.Text({
    height: 38,
    marginTop: 10,
    fontSize: 12,
})

export const MoreText = styled.Text({
    height: 19,
    fontSize: 12,
    textAlign: 'right',
})
