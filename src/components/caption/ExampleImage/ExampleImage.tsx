import Image from "next/image"
import React from "react"
import * as s from "./ExampleImageStyle"
import ExampleImageSrc from "../../../../public/example_caption.png"

const ExampleImage: React.FC = () => {
  return (
    <div css={s.exampleImageContainerStyle}>
      <Image src={ExampleImageSrc} width={300} alt="Example image" css={s.exampleImageStyle} />
    </div>
  )
}

export default ExampleImage