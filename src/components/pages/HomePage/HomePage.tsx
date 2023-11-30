import React from "react"
import { createCaptionPdfWithJsPdf, getPdfDataUrl, JsPDF, savePdf } from "@/libs/jspdf"
import { asyncTask } from "@/utils/asyncTask"
import { useState } from "react"
import Iframe from "../../ui/Iframe"
import * as s from "./HomePageStyle"
import CaptionCard from "@/components/caption/CaptionCard"
import Button from "@/components/ui/Button"
import ExampleImage from "@/components/caption/ExampleImage"
import DownloadIcon from "@/components/icons/DownloadIcon"
import PasteArea from "@/components/caption/pasteArea"
import { CaptionTableData } from "@/features/caption/toCaptionTableData"
import PreviewTable from "@/components/caption/PreviewTable"
import Spacer from "@/components/ui/Spacer"
import FlexContainer from "@/components/ui/FlexContainer"

const HomePage: React.FC = () => {
  const [captionTableData, setCaptionTableData] = useState<CaptionTableData | null>(null)
  const [pdf, setPdf] = useState<JsPDF | null>(null)
  const [pdfDataUrl, setPdfDataUrl] = useState<string | null>(null)
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false)

  const onCreateCaption = () => {
    if (!captionTableData) { return }
    setIsSubmitLoading(true)

    asyncTask(async () => {
      const doc = await createCaptionPdfWithJsPdf(captionTableData)
      setPdf(doc)
      const url = getPdfDataUrl(doc)
      setPdfDataUrl(url)
      setIsSubmitLoading(false)
    })
  }

  const onClear = () => {
    setCaptionTableData(null)
  }

  const onClickDownload: React.MouseEventHandler<HTMLButtonElement> = () => {
    pdf && savePdf(pdf)
  }

  return (
    <div css={s.pageStyle}>
      <p css={s.titleStyle}>
        <span>表データから</span><span>展覧会の</span><span>キャプションを</span><span>生成</span>
      </p>
      <div css={s.containerStyle}>
        <CaptionCard title="表データ">
          <div>
            <PreviewTable captionTableData={captionTableData}>
              <PasteArea setCaptionTableData={setCaptionTableData} />
            </PreviewTable>
          </div>

          {captionTableData &&
            <div>
              <Spacer size={12} />
              <FlexContainer justifyContent="left">
                <Button
                  style="contained"
                  isLoading={isSubmitLoading}
                  onClick={onCreateCaption}
                >
                  {isSubmitLoading ? "処理中..." : "キャプションを生成"}
                </Button>
                <Button
                  style="text"
                  onClick={onClear}
                >
                  クリア
                </Button>
              </FlexContainer>
            </div>
          }
        </CaptionCard>

        <div css={s.centerStyle}>
          <span css={s.arrorIcon}>
            →
          </span>
        </div>

        <CaptionCard title="PDF">
          {pdfDataUrl
            ?
            <div css={s.iframeContainerStyle} >
              <Iframe src={pdfDataUrl + "#toolbar=0"} />
              <Spacer size={12} />
              <FlexContainer justifyContent="center">
                <Button
                  onClick={onClickDownload}
                  style="text"
                >
                  <DownloadIcon size={24} />
                  ダウンロード
                </Button>
              </FlexContainer>
            </div>
            :
            <div>
              <ExampleImage />
            </div>
          }
        </CaptionCard>
      </div>
    </div>
  )
}

export default HomePage