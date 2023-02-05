import React from "react"
import * as s from "./ButtonStyle"

type Props = React.ComponentProps<"button"> & {
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <button {...props} css={s.buttonStyle}>
      {children}
    </button>
  )
}

export default Button