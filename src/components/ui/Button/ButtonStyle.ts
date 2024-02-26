import { primaryColor, primaryElevatedColor } from "@/styles/colors"
import { css } from "@emotion/react"

export const buttonStyle = (isLoading: boolean, style: "contained" | "text") => css`
  min-width: 95px;
  min-height: 42px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  border-radius: 6px;
  cursor: ${isLoading ? "default" : "pointer"};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  transition: 0.1s ease-in-out;
  ${style == "contained" && containedButtonStyle(isLoading)}
  ${style == "text" && textButtonStyle}
`

const containedButtonStyle = (isLoading: boolean) => css`
  background-color: ${primaryColor};
  color: #fff;
  border: solid 1px transparent;
  &:hover {
    background-color: ${primaryElevatedColor};
  }
  ${isLoading && css`
    opacity: 0.3;
  `}
`

const textButtonStyle = css`
  /* margin: 0 auto; */
  font-size: 18px;
  border: none;
  color: ${primaryColor};
  &:hover {
    color: ${primaryElevatedColor};
  }
  font-weight: 500;
  background-color: transparent;
`