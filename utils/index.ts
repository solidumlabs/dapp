export const getShortToken = (token: string, index: number = 6): string => {
  const length = token.length
  const partA = token.slice(0, index)
  const partB = token.slice(length - 4)
  return partA + '...' + partB
}
