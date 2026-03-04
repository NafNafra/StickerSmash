import { ReactNode } from "react"

export interface buttonInterface {
  onPress: (e: any | undefined) => void
  style?: object
  text?: string
  children?: ReactNode
  variant?: "principal" | "second" | "tertiary" | null
  textColor?: string
}