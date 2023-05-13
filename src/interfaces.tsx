import { ReactNode } from "react"
import { ViewStyle } from "react-native"

export interface TableProps {
    children?: ReactNode
    widths: Array<Number>
    style?: ViewStyle
    width?: number
    // any props that come into the component
  }