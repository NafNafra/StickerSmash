type BorderProps = {
  width: number,
  color: string,
  radius: number
}

export const borderWidth = (value: number) => ({
  borderWidth: value
})

export const borderColor = (value: string) => ({
  borderColor: value
})

export const borderRadius = (value: number) => ({
  borderRadius: value
})

export const border = (value: BorderProps) => {
  return {
    ...borderWidth(value.width),
    ...borderColor(value.color),
    ...borderRadius(value.radius)    
  }
}