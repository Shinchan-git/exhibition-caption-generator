import { css } from "@emotion/react"

export const textareaStyle = css`
  resize: none;
  width: 100%;
  height: 120px;
  border: none;
  padding: 6px;
  border: dashed #acc9e6 3px;
  &:focus {
    border: dashed #0095ff  3px;
  }
  transition: all 0.2s ease-out;
`
