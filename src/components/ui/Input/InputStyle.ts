import { css } from "@emotion/react"

export const inputStyle = (isPrimary: boolean) => css`
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  border: ${isPrimary ? "none" : "solid 1px #0080ff"};
  color: ${isPrimary ? "#fff" : "#0080ff"};
  background-color: ${isPrimary ? "#0080ff" : "#fff"};

  &:hover {
    transition: all 0.2s;
    background-color: ${isPrimary ? "#1a8cff" : "#e6f2ff"};
  }

  &[type="file"] {
    position: absolute;
    left:0;
    top:0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1000;
  }
`