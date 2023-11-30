type CellData = string

export type TableData = CellData[][]

const traverseCell = (item: ChildNode): CellData => {
  const children = item.childNodes

  if (children.length < 1) {
    if (item.nodeType === item.TEXT_NODE && item.textContent) {
      return item.textContent ?? ""
    }
    if (item.nodeType === item.ELEMENT_NODE && item.nodeName === "BR") {
      return "\n"
    }
    return ""
  }

  if (children.length === 1) {
    return item.textContent ?? ""
  }

  const parsedStringArray = Array.from(children.values())
    .map((child: ChildNode) => traverseCell(child))
    .flat(10)
  return parsedStringArray[0] ?? ""
}

export const parseHtmlTableData = (html: string): TableData => {
  const dom = new DOMParser().parseFromString(html, "text/html")

  return Array.from(dom.querySelectorAll("tr")).map(trItems => {
    return Array.from(trItems.querySelectorAll("td")).map(tdItems => {
      return traverseCell(tdItems)
    })
  })
}