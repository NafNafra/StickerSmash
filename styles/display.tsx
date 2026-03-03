import { StyleSheet } from "react-native";

export const display = StyleSheet.create({
  'flex': {
    display: 'flex'
  },
  'contents': {
    display: 'contents'
  },
  'none': {
    display: 'none'
  },
})

export const direction = StyleSheet.create({
  'row': {
    flexDirection: 'row'
  },
  'column': {
    flexDirection: 'column'
  },
  'row-reverse': {
    flexDirection: 'row-reverse'
  },
  'column-reverse': {
    flexDirection: 'column-reverse'
  }
})

export const justify = StyleSheet.create({
  'flex-start': {
    justifyContent: 'flex-start'
  },
  'flex-end': {
    justifyContent: 'flex-end'
  },
  'center': {
    justifyContent: 'center'
  },
  'space-between': {
    justifyContent: 'space-between'
  },
  'space-around': {
    justifyContent: 'space-around'
  },
  'space-evenly': {
    justifyContent: 'space-evenly'
  },
})

export const alignItems = StyleSheet.create({
  'flex-start': {
    alignItems: 'flex-start'
  },
  'flex-end': {
    alignItems: 'flex-end'
  },
  'center': {
    alignItems: 'center'
  },
  'stretch': {
    alignItems: 'stretch'
  },
  'baseline': {
    alignItems: 'baseline'
  },
})

export const gap = (gapValue: number) => ({
  gap: gapValue
})

export const flex = (sizeFlex : number) => {
  return { flex: sizeFlex }
}
