import { CaptionData } from "./toCaptionData"

type Props = {
  data: CaptionData
  index: number
}

type Position = {
  x: number
  y: number
}

type Size = {
  width: number
  height: number
}

type CaptionElementLayout = Position & {
  size: number
}

type CaptionLayout = CaptionData<CaptionElementLayout> & {
  rect: Position & Size
}

//単位はmm
export const ROW_COUNT = 2
export const COLUMN_COUNT = 2
export const PAGE_SIZE: Size = { width: 297, height: 210 }

export const captionLayout = ({ data, index }: Props): CaptionLayout => {
  const indexWithinPage = index % (ROW_COUNT * COLUMN_COUNT)
  const rowIndex = Math.floor(indexWithinPage / COLUMN_COUNT)
  const columnIndex = indexWithinPage % COLUMN_COUNT

  //Rectangle
  const rectangleSize: Size = { width: 110, height: 58 }
  const rectangleMargin: Size = {
    width: (PAGE_SIZE.width - rectangleSize.width * COLUMN_COUNT) / 2,
    height: (PAGE_SIZE.height - rectangleSize.height * ROW_COUNT) / 2
  }
  const rectanglePosition: Position = {
    x: rectangleMargin.width + rectangleSize.width * columnIndex,
    y: rectangleMargin.height + rectangleSize.height * rowIndex + 1
  }

  //Title
  const maxTtitleSize = 20
  const titleSize = Math.min(maxTtitleSize, Math.max(14, maxTtitleSize - (data.title.length - 12)))
  const titlePosition: Position = { x: 8.5, y: 8.6 + maxTtitleSize / 3 }

  //Name
  const nameSize = 15
  const namePosition: Position = { x: titlePosition.x, y: titlePosition.y + 8 + nameSize / 3 }

  //Grade
  const gradeSize = 14
  const gradePosition: Position = { x: namePosition.x + 36, y: namePosition.y }

  //Size
  const sizeSize = 12
  const sizePotision: Position = { x: rectangleSize.width - titlePosition.x, y: rectangleSize.height - titlePosition.x }

  //Materials
  const materialsSize = 12
  const materialsPosition: Position = { x: sizePotision.x, y: sizePotision.y - 6 - sizeSize / 3 }

  return {
    title: { x: rectanglePosition.x + titlePosition.x, y: rectanglePosition.y + titlePosition.y, size: titleSize },
    name: { x: rectanglePosition.x + namePosition.x, y: rectanglePosition.y + namePosition.y, size: nameSize },
    grade: { x: rectanglePosition.x + gradePosition.x, y: rectanglePosition.y + gradePosition.y, size: gradeSize },
    materials: { x: rectanglePosition.x + materialsPosition.x, y: rectanglePosition.y + materialsPosition.y, size: materialsSize },
    size: { x: rectanglePosition.x + sizePotision.x, y: rectanglePosition.y + sizePotision.y, size: sizeSize },
    rect: { x: rectanglePosition.x, y: rectanglePosition.y, width: rectangleSize.width, height: rectangleSize.height }
  }
}