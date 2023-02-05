import * as s from "./IframeStyle"

type Props = React.ComponentProps<"iframe">

const Iframe: React.FC<Props> = (props: Props) => {
  return (
    <iframe {...props} css={s.iframeStyle} />
  )
}

export default Iframe