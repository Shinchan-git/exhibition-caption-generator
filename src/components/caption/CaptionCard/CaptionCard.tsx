import React from "react"
import * as s from "./CaptionCardStyle"

type Props = {
  title: string
  children: React.ReactNode
}

const CaptionCard: React.FC<Props> = ({ title, children }) => {
  return (
    <div css={s.captionCardStyle}>
      <div css={s.captionCardTitleStyle}>
        {title}
      </div>
      {children}
    </div>
  )
}

export default CaptionCard