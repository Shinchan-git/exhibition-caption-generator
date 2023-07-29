import { css, keyframes } from "@emotion/react"

const rotate = keyframes`
  from {
    rotate: 0;
  }
  to {
    rotate: 360deg;
  }
`

export const loadingCircleStyle = css`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-top: 3px solid #004d99;
  display: inline-block;
  animation: ${rotate} 1.5s ease-in-out 0s infinite;
`