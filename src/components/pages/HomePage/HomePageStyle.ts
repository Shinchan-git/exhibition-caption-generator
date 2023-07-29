import { breakPoint } from "@/styles/styleConstants"
import { css } from "@emotion/react"

export const pageStyle = css`
  padding: 0 16px;
  margin-bottom: 16px;
`

export const titleStyle = css`
  text-align: center;
  font-size: 24px;
  padding: 40px 0;
`

export const containerStyle = css`
  display: flex;
  justify-content: center;

  @media(max-width: ${breakPoint}) {
    display: inline;
  }
`

export const centerStyle = css`
  width: 5%auto;
  padding: 8px 20px;
  text-align: center;
`

export const arrorIcon = css`
  @media(max-width: ${breakPoint}) {
    transform: rotate(90deg);
  }
`

export const inputFileLabelContainerStyle = css`
  padding: 16px 0;
`

export const inputFileLabelStyle = (isPrimary: boolean) => css`
  position: relative;

  padding: 6px 12px;
  font-size: 16px;
  border-radius: 6px;
  font-weight: 500;
  border: ${isPrimary ? "none" : "solid 1px #0080ff"};
  color: ${isPrimary ? "#fff" : "#0080ff"};
  background-color: ${isPrimary ? "#0080ff" : "#fff"};

  &:hover {
    transition: all 0.2s;
    background-color: ${isPrimary ? "#1a8cff" : "#e6f2ff"};
  }
`

export const fileNameStyle = css`
  padding: 8px 16px;
`

export const iframeContainerStyle = css`
  text-align: center;
`