import { backgroundColor } from "@/styles/colors"
import { css } from "@emotion/react"

export const layoutStyle = css`
  background-color: ${backgroundColor};
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`
