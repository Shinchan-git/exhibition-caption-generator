import { FILE_NAME } from "@/constants/constants";
import { captionLayout, COLUMN_COUNT, ROW_COUNT } from "@/features/caption/captionLayout";
import { CaptionData } from "@/features/caption/toCaptionData"
import { jsPDF } from "jspdf"

export type JsPDF = jsPDF

export const createCaptionPdfWithJsPdf = (captionData: CaptionData[]): Promise<JsPDF> => {
  return new Promise(async (resolve) => {
    const doc = new jsPDF({
      orientation: "landscape",
      format: "A4"
    })

    const genShinGothicRegularFontBytes = await fetch("/GenShinGothic-Regular.ttf").then(async (res) => {
      const arrayBuffer = await res.arrayBuffer()
      return arrayBufferToBinaryString(arrayBuffer)
    })
    const genShinGothicMediumFontBytes = await fetch("/GenShinGothic-Medium.ttf").then(async (res) => {
      const arrayBuffer = await res.arrayBuffer()
      return arrayBufferToBinaryString(arrayBuffer)
    })

    doc.addFileToVFS("GenShinGothic-Regular.ttf", genShinGothicRegularFontBytes)
    doc.addFont("GenShinGothic-Regular.ttf", "GenShinGothicRegular", "normal")
    doc.addFileToVFS("GenShinGothic-Medium.ttf", genShinGothicMediumFontBytes)
    doc.addFont("GenShinGothic-Medium.ttf", "GenShinGothicMedium", "normal")

    for (let i = 0; i < captionData.length; i++) {
      const data = captionData[i]
      const layout = captionLayout({ data: data, index: i })
      const itemCountWithinPage = COLUMN_COUNT * ROW_COUNT
      if (i !== 0 && i % itemCountWithinPage === 0) {
        doc.addPage()
      }

      //Title
      doc.setFont("GenShinGothicMedium")
      doc.setFontSize(layout.title.size)
      doc.setTextColor("#000000")
      doc.text(data.title, layout.title.x, layout.title.y)

      //Name
      doc.setFont("GenShinGothicRegular")
      doc.setFontSize(layout.name.size)
      doc.text(data.name, layout.name.x, layout.name.y)

      //Grade
      doc.setFontSize(layout.grade.size)
      doc.text(data.grade, layout.grade.x, layout.grade.y)

      //Materials
      doc.setFontSize(layout.materials.size)
      doc.text(data.materials, layout.materials.x, layout.materials.y, { align: "right" })

      //Size
      doc.setFontSize(layout.size.size)
      doc.text(data.size, layout.size.x, layout.size.y, { align: "right" })

      if (data.id !== "") {
        //ID background
        doc.setFillColor("#000000")
        doc.circle(layout.idBackground.x, layout.idBackground.y, layout.idBackground.radius, "F")

        //ID
        doc.setFont("GenShinGothicMedium")
        doc.setFontSize(layout.id.size)
        doc.setTextColor("#FFFFFF")
        doc.text(data.id, layout.id.x, layout.id.y, { align: "center" })
      }

      //Rectangle
      doc.rect(layout.rect.x, layout.rect.y, layout.rect.width, layout.rect.height)
    }

    resolve(doc)
  })
}

function arrayBufferToBinaryString(arrayBuffer: ArrayBuffer) {
  let binaryString = ""
  const bytes = new Uint8Array(arrayBuffer)
  const len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binaryString += String.fromCharCode(bytes[i])
  }
  return binaryString
}

export const savePdf = (doc: JsPDF) => {
  doc.save(FILE_NAME)
}

export const getPdfDataUrl = (doc: JsPDF) => {
  return doc.output("datauristring")
}