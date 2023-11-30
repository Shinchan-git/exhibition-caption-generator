import React from "react"
import * as s from "./PasteAreaStyle"
import { parseHtmlTableData } from "@/features/caption/parseHtmlTableData"
import { CaptionTableData, toCaptionTableData } from "@/features/caption/toCaptionTableData"

type Props = {
  setCaptionTableData: React.Dispatch<React.SetStateAction<CaptionTableData | null>>
}

const PasteArea: React.FC<Props> = ({ setCaptionTableData }) => {

  const onPaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    const htmlData = e.clipboardData?.getData("text/html")
    if (!htmlData) { return }
    const parsedData = parseHtmlTableData(htmlData)
    const captionTableData = toCaptionTableData(parsedData)
    setCaptionTableData(captionTableData)
  }

  return (
    <textarea
      placeholder="右クリック→「貼り付け」で表データをペースト"
      onPaste={onPaste}
      css={s.textareaStyle}
    />
  )
}

export default PasteArea