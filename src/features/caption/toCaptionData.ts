export type CaptionData<T = string> = {
  title: T
  name: T
  grade: T
  materials: T
  size: T
}

export const toCaptionData = (data: object[]): CaptionData[] | null => {
  const firstData = data[0]
  if (!firstData) { return null }

  const keyArray = Object.keys(firstData)
  const key = {
    title: keyArray[0] ?? null,
    name: keyArray[1] ?? null,
    grade: keyArray[2] ?? null,
    materials: keyArray[3] ?? null,
    size: keyArray[4] ?? null,
  }

  const parsed: CaptionData[] = data.map((item: any) => {
    return {
      title: ((key.title ? item[key.title] : "") ?? "").toString(),
      name: ((key.title ? item[key.name] : "") ?? "").toString(),
      grade: ((key.title ? item[key.grade] : "") ?? "").toString(),
      materials: ((key.title ? item[key.materials] : "") ?? "").toString(),
      size: ((key.title ? item[key.size] : "") ?? "").toString(),
    }
  })

  return parsed
}