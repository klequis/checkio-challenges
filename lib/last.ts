// import { green } from 'logger'
import { isString } from './isString'

type LastType = string | string[]

export const last = (data: LastType): LastType => {
  if (isString(data)) {
    return data.slice(-1)
  }
  return data.slice(-1)[0]
}
