import { TextStyle } from 'react-native';

type SizeProps = {
  width?: number | `${number}%`,
  height?: number | `${number}%`,
}
type LimitSizeProps = {
  minWidth?: number | `${number}%`,
  minHeight?: number | `${number}%`,
  maxWidth?: number | `${number}%`,
  maxHeight?: number | `${number}%`,
}

export const size = (props: SizeProps): Partial<TextStyle> => {
  let sizeWH = {}
  if (props.width !== undefined) sizeWH = {...sizeWH, width: props.width}
  if (props.height !== undefined) sizeWH = {...sizeWH, height: props.height}
  return sizeWH
}

export const limitSize = (props: LimitSizeProps) => {
  let sizeLimit = {}
  if (props.minWidth !== undefined) sizeLimit = {...sizeLimit, width: props.minWidth}
  if (props.maxWidth !== undefined) sizeLimit = {...sizeLimit, width: props.maxWidth}
  if (props.minHeight !== undefined) sizeLimit = {...sizeLimit, height: props.minHeight}
  if (props.maxHeight !== undefined) sizeLimit = {...sizeLimit, height: props.maxHeight}
  return sizeLimit
}

