import React from 'react'
import * as s from "./FlexContainerStyle"

type Props = {
  justifyContent: "left" | "center" | "right"
  children: React.ReactNode
}

const FlexContainer: React.FC<Props> = ({ justifyContent, children }) => {
  return (
    <div css={() => s.flexContainerStyle(justifyContent)}>
      {children}
    </div>
  )
}

export default FlexContainer