import React from 'react'
import { css } from '@emotion/react'

type Props = {
  size?: number
}

const DownloadIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size + "px" || "48px"}
      height={props.size + "px" || "48px"}
      viewBox="0 -960 960 960"
      css={iconStyle}
    >
      <path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z" />
    </svg>
  )
}

const iconStyle = css`
  fill: currentColor;
  vertical-align: middle;
`

export default DownloadIcon