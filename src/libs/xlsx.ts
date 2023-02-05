import * as XLSX from "xlsx"

export const toExcelData = (file: File): Promise<[object]> => {
  return new Promise((resolve) => {
    file.arrayBuffer().then((buffer) => {
      const workbook = XLSX.read(buffer, { type: 'buffer', bookVBA: true })
      const firstSheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[firstSheetName]
      const data = XLSX.utils.sheet_to_json(worksheet) as [object]
      resolve(data)
    })
  })
}