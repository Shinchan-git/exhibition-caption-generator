import { borderColor, primaryColor, primaryElevatedColor, primaryHoverdColor, primarySelectedColor, supportingTextColor } from "@/styles/colors"
import { css } from "@emotion/react"

export const supportingTextStyle = css`
  font-size: 15px;
  color: ${supportingTextColor};
`
export const toggleGroupStyle = css`
  display: inline-flex;
  border: 1px solid ${borderColor};
  border-radius: 6px;
  overflow: hidden;
`
export const toggleItemStyle = css`
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 6px 0;
  width: 95px;
  height: 25px;
  display: flex;
  font-size: 15px;
  line-height: 1;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${borderColor};
  &:hover {
    color: ${primaryElevatedColor};
    background-color: ${primaryHoverdColor};
  }
  &[data-state='on'] {
    color: ${primaryColor};
    background-color: ${primarySelectedColor};
  }
  &:first-child  {
    border: none;
  }
`
export const checBoxContainerStyle = css`
  display: flex;
  align-items: center;
`
export const checkBoxLabelStyle = css`
  border: none;
  background-color: transparent;
  color: ${supportingTextColor};
  font-size: 15px;
`
export const checkBoxRootStyle = css`
  border: 1px solid ${borderColor};
  background-color: transparent;
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${primaryHoverdColor};
  }
`
export const checkBoxIndicatorStyle = css`
  color: ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
`