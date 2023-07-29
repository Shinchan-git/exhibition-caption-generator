import React from "react"
import * as s from "./InputStyle"

type Props = React.ComponentProps<"input"> & {
  isPrimary?: boolean,
  isLoading?: boolean
}

const Input: React.FC<Props> = ({ isPrimary, ...props }: Props) => {
  return (
    <input
      {...props}
      css={() => s.inputStyle(isPrimary ?? false)}
    />
  )
}

export default Input