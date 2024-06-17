import { FILE_NAME } from "@/constants/constants"
import { captionLayout, COLUMN_COUNT, ROW_COUNT } from "@/features/caption/captionLayout"
import { CaptionTableData } from "@/features/caption/toCaptionTableData"
import { removeSpace } from "@/utils/removeSpace"
import { jsPDF } from "jspdf"

export type JsPDF = jsPDF

export type FontConfig = "GenShinGothic" | "ShipporiMincho"

export const createCaptionPdfWithJsPdf = ({
  captionTableData,
  fontConfig,
  showId
}: {
  captionTableData: CaptionTableData
  fontConfig: FontConfig
  showId: boolean
}): Promise<JsPDF> => {
  return new Promise(async (resolve) => {
    const doc = new jsPDF({
      orientation: "landscape",
      format: "A4"
    })

    const GENSHIN_GOTHIC_REGULAR = "GenShinGothicRegular"
    const GENSHIN_GOTHIC_MEDIUM = "GenShinGothicMedium"
    if (fontConfig === "GenShinGothic") {
      const genShinGothicRegularFontBytes = await loadFont("/GenShinGothic-Regular.ttf")
      const genShinGothicMediumFontBytes = await loadFont("/GenShinGothic-Medium.ttf")
      doc.addFileToVFS("GenShinGothic-Regular.ttf", genShinGothicRegularFontBytes)
      doc.addFont("GenShinGothic-Regular.ttf", GENSHIN_GOTHIC_REGULAR, "normal")
      doc.addFileToVFS("GenShinGothic-Medium.ttf", genShinGothicMediumFontBytes)
      doc.addFont("GenShinGothic-Medium.ttf", GENSHIN_GOTHIC_MEDIUM, "normal")
    }

    const SHIPPORI_MINCHO_MEDIUM = "ShippriMinchoMedium"
    const SHIPPORI_MINCHO_BOLD = "ShipporiMinchoBold"
    if (fontConfig === "ShipporiMincho") {
      const shipporiMinchoRegularFontBytes = await loadFont("/ShipporiMincho-Medium.ttf")
      const shipporiMinchoSemiBoldFontBytes = await loadFont("/ShipporiMincho-Bold.ttf")
      doc.addFileToVFS("ShipporiMincho-Medium.ttf", shipporiMinchoRegularFontBytes)
      doc.addFont("ShipporiMincho-Medium.ttf", SHIPPORI_MINCHO_MEDIUM, "normal")
      doc.addFileToVFS("ShipporiMincho-Bold.ttf", shipporiMinchoSemiBoldFontBytes)
      doc.addFont("ShipporiMincho-Bold.ttf", SHIPPORI_MINCHO_BOLD, "normal")
    }

    const CAMERA_IMG = new Image()
    CAMERA_IMG.src = "/camera.jpg"

    for (let i = 0; i < captionTableData.length; i++) {
      const data = captionTableData[i]
      const layout = captionLayout({ data: data, index: i })
      const itemCountWithinPage = COLUMN_COUNT * ROW_COUNT
      if (i !== 0 && i % itemCountWithinPage === 0) {
        doc.addPage()
      }

      //Title
      doc.setFont(fontConfig === "ShipporiMincho" ? SHIPPORI_MINCHO_BOLD : GENSHIN_GOTHIC_MEDIUM)
      doc.setFontSize(layout.title.size)
      doc.setTextColor("#000000")
      doc.text(data.title, layout.title.x, layout.title.y)

      //Name
      doc.setFont(fontConfig === "ShipporiMincho" ? SHIPPORI_MINCHO_MEDIUM : GENSHIN_GOTHIC_REGULAR)
      doc.setFontSize(layout.name.size)
      doc.text(data.name, layout.name.x, layout.name.y)

      //Grade
      doc.setFontSize(layout.grade.size)
      doc.text(data.grade, layout.grade.x, layout.grade.y, { align: "right" })

      //Materials
      doc.setFontSize(layout.materials.size)
      doc.text(data.materials, layout.materials.x, layout.materials.y, {
        align: "right"
      })

      //Size
      doc.setFontSize(layout.size.size)
      doc.text(data.size, layout.size.x, layout.size.y, { align: "right" })

      if (removeSpace(data.id) !== "" && showId) {
        //ID background
        doc.setFillColor("#000000")
        doc.circle(layout.idBackground.x, layout.idBackground.y, layout.idBackground.radius, "F")

        //ID
        doc.setFont(fontConfig === "ShipporiMincho" ? SHIPPORI_MINCHO_BOLD : GENSHIN_GOTHIC_MEDIUM)
        doc.setFontSize(layout.id.size)
        doc.setTextColor("#FFFFFF")
        doc.text(data.id, layout.id.x, layout.id.y, { align: "center" })
      }

      //Camera
      if (data.camera === "NO" || data.camera === "1" || data.camera === "F" || data.camera === "FALSE") {
        doc.addImage(CAMERA_IMG, "JPEG", layout.camera.x, layout.camera.y, layout.camera.size, layout.camera.size)
      }

      //Rectangle
      doc.rect(layout.rect.x, layout.rect.y, layout.rect.width, layout.rect.height)
    }

    resolve(doc)
  })
}

const loadFont = async (path: string): Promise<string> => {
  return fetch(path).then(async (res) => {
    const arrayBuffer = await res.arrayBuffer()
    return arrayBufferToBinaryString(arrayBuffer)
  })
}

const arrayBufferToBinaryString = (arrayBuffer: ArrayBuffer) => {
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
