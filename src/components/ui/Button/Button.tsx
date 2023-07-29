import React from "react"
import * as s from "./ButtonStyle"
import LoadingCircle from "../LoadingCircle"

type Props = React.ComponentProps<"button"> & {
  children: React.ReactNode,
  isLoading?: boolean
  style: "contained" | "text"
}

const Button: React.FC<Props> = ({ children, isLoading, style, ...props }: Props) => {
  return (
    <button {...props} css={() => s.buttonStyle(isLoading ?? false, style)}>
      {children}
      {isLoading &&
        <LoadingCircle />
      }
    </button>
  )
}

export default Button