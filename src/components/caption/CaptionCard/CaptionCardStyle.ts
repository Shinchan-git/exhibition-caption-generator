import { breakPoint } from "@/styles/styleConstants"
import { css } from "@emotion/react"

export const captionCardStyle = css`
  width: 40%;
  background: #fff;
  border: solid 1px #ccc;
  border-radius: 12px;
  overflow: hidden;
  padding: 16px;

   @media(max-width: ${breakPoint}) {
    width: 100%;
  }
`

export const captionCardTitleStyle = css`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 16px;
`