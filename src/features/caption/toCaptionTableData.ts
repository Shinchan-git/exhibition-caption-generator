import { TableData } from "./parseHtmlTableData"

export type CaptionData<T = string> = {
  title: T,
  name: T,
  grade: T,
  materials: T,
  size: T,
  id: T
}

export type CaptionTableData = CaptionData[]

export const toCaptionTableData = (tableData: TableData): CaptionTableData => {
  const captionTableData: CaptionData[] = tableData.map((row) => {
    return {
      title: row[0] ?? "",
      name: row[1] ?? "",
      grade: row[2] ?? "",
      materials: row[3] ?? "",
      size: row[4] ?? "",
      id: row[5] ?? ""
    }
  })

  return captionTableData
}
