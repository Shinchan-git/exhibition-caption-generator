export const removeSpace = (text: string) => {
  const replaced = text.replace(/\s+/g, "")

  return replaced
}
