import { css } from "@emotion/react"

export const flexContainerStyle = (justifyContent: "left" | "center" | "right") => css`
  display: flex;
  justify-content: ${justifyContent};
`