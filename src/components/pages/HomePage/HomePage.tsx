import React from "react"
import { toCaptionData } from "@/features/caption/toCaptionData"
import { createCaptionPdfWithJsPdf, getPdfDataUrl, JsPDF, savePdf } from "@/libs/jspdf"
import { toExcelData } from "@/libs/xlsx"
import { asyncTask } from "@/utils/asyncTask"
import { useEffect, useState } from "react"
import Iframe from "../../ui/Iframe"
import * as s from "./HomePageStyle"
import CaptionCard from "@/components/caption/CaptionCard"
import ExampleTable from "@/components/caption/ExampleTable"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import ExampleImage from "@/components/caption/ExampleImage"

const HomePage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [excelData, setExcelData] = useState<[object] | null>(null)
  const [pdf, setPdf] = useState<JsPDF | null>(null)
  const [pdfDataUrl, setPdfDataUrl] = useState<string | null>(null)

  //Set PDF
  useEffect(() => {
    if (!excelData) { return }
    const captionData = toCaptionData(excelData)
    if (!captionData) { return }

    asyncTask(async () => {
      const doc = await createCaptionPdfWithJsPdf(captionData)
      setPdf(doc)
      const url = getPdfDataUrl(doc)
      setPdfDataUrl(url)
    })
  }, [excelData])

  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.target.files
    if (files && files[0]) {
      setFile(files[0])
    }
  }

  const onSubmitFile: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (!file) { return }
    asyncTask(async () => {
      const data = await toExcelData(file)
      setExcelData(data)
    })
  }

  const onClickDownload: React.MouseEventHandler<HTMLButtonElement> = () => {
    pdf && savePdf(pdf)
  }

  return (
    <div css={s.pageStyle}>
      <p css={s.titleStyle}>
        <span>Excelデータから</span><span>展覧会の</span><span>キャプションを</span><span>生成</span>
      </p>
      <div css={s.containerStyle}>
        <CaptionCard title="Excel">
          <div>
            <p>
              このようなExcelファイルを作成してください。
            </p>
            <ExampleTable />
          </div>
          <form onSubmit={onSubmitFile}>
            <div css={s.inputFileLabelContainerStyle}>
              <label htmlFor="file" css={() => s.inputFileLabelStyle(!file)}>
                Excelファイルを選択
                <Input type="file" accept=".xlsx" onChange={onChangeFile} />
              </label>
              {file &&
                <span css={s.fileNameStyle}>
                  {file.name}
                </span>
              }
            </div>
            {file &&
              <Input type="submit" value="キャプションを生成" isPrimary={true} />
            }
          </form>
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
              <Button onClick={onClickDownload}>
                ダウンロード
              </Button>
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