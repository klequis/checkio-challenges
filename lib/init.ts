type InitType = string | string[]

export const init = (data: InitType): InitType => {
  return data.slice(0, data.length - 1)
}
