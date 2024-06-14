import { CaptionData } from "./toCaptionTableData"

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
  idBackground: Position & { radius: number }
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
  const rectangleSize: Size = { width: 100, height: 52 }
  const rectangleMargin: Size = {
    width: (PAGE_SIZE.width - rectangleSize.width * COLUMN_COUNT) / 2,
    height: (PAGE_SIZE.height - rectangleSize.height * ROW_COUNT) / 2
  }
  const rectanglePosition: Position = {
    x: rectangleMargin.width + rectangleSize.width * columnIndex,
    y: rectangleMargin.height + rectangleSize.height * rowIndex + 1
  }

  //Title
  const maxTtitleSize = 19
  const titleSize = Math.min(
    maxTtitleSize,
    Math.max(14, maxTtitleSize - (countTextLengthInZenakuLength(data.title) - 12))
  )
  const titlePosition: Position = { x: 8.5, y: 8.6 + maxTtitleSize / 3 }

  //Name
  const nameSize = 14
  const namePosition: Position = {
    x: titlePosition.x,
    y: titlePosition.y + 8 + nameSize / 3
  }

  //Grade
  const gradeSize = 13
  const gradePosition: Position = {
    x: rectangleSize.width - titlePosition.x,
    y: namePosition.y
  }

  //Size
  const sizeSize = 11
  const sizePotision: Position = {
    x: gradePosition.x,
    y: rectangleSize.height - titlePosition.x
  }

  //Materials
  const materialsSize = 11
  const materialsPosition: Position = {
    x: gradePosition.x,
    y: sizePotision.y - 4 - sizeSize / 3
  }

  //ID
  const idSize = 7
  const idPosition: Position = { x: rectangleSize.width - 6, y: 7 }

  //ID backgroung
  const idBackgroundSize = 2.2
  const idBackgroundPosition: Position = {
    x: idPosition.x - 0.1,
    y: idPosition.y - 0.9
  }

  //Camera
  const cameraSize = 8
  const cameraPositoin: Position = {
    x: titlePosition.x,
    y: sizePotision.y - cameraSize + 1
  }

  return {
    title: {
      x: rectanglePosition.x + titlePosition.x,
      y: rectanglePosition.y + titlePosition.y,
      size: titleSize
    },
    name: {
      x: rectanglePosition.x + namePosition.x,
      y: rectanglePosition.y + namePosition.y,
      size: nameSize
    },
    grade: {
      x: rectanglePosition.x + gradePosition.x,
      y: rectanglePosition.y + gradePosition.y,
      size: gradeSize
    },
    materials: {
      x: rectanglePosition.x + materialsPosition.x,
      y: rectanglePosition.y + materialsPosition.y,
      size: materialsSize
    },
    size: {
      x: rectanglePosition.x + sizePotision.x,
      y: rectanglePosition.y + sizePotision.y,
      size: sizeSize
    },
    id: {
      x: rectanglePosition.x + idPosition.x,
      y: rectanglePosition.y + idPosition.y,
      size: idSize
    },
    camera: {
      x: rectanglePosition.x + cameraPositoin.x,
      y: rectanglePosition.y + cameraPositoin.y,
      size: cameraSize
    },
    idBackground: {
      x: rectanglePosition.x + idBackgroundPosition.x,
      y: rectanglePosition.y + idBackgroundPosition.y,
      radius: idBackgroundSize
    },
    rect: {
      x: rectanglePosition.x,
      y: rectanglePosition.y,
      width: rectangleSize.width,
      height: rectangleSize.height
    }
  }
}

const countTextLengthInZenakuLength = (text: string): number => {
  let length = 0
  for (let i = 0; i < text.length; i++) {
    text[i].match(/[ -~]/) ? (length += 0.7) : (length += 1)
  }
  return length
}
