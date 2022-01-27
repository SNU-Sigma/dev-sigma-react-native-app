import styled from '@emotion/native'

type Props =
    | {
          width: number
          height?: never
      }
    | {
          height: number
          width?: never
      }

export default styled.View<Props>((props) => ({
    width: props.width,
    height: props.height,
}))
