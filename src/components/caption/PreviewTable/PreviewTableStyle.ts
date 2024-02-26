import { borderColor } from "@/styles/colors"
import { css } from "@emotion/react"

export const containerStyle = css`
  padding: 16px 8px;
  max-height: 430px;
  overflow: scroll;
`

export const tableStyle = css`
  width: 100%;
  border: solid 1px ${borderColor};
  border-radius: 2px;
  background-color: #fcfeff;
`

export const defaultStyle = css`
  border: none;
`

export const rowStyle = css`
  border: solid 1px ${borderColor};
`

export const cellStyle = css`
  border: solid 0.5px ${borderColor};
  padding: 2px;
`

export const cellAllPaddingStyle = css`
  border: none;
  padding: 4px;
  padding-bottom: 0;
`