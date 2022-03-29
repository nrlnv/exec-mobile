import React from "react"
import { Pressable, TextStyle, ViewStyle } from "react-native"
import { Text } from "../../../components"
import { perfectSize } from "../../../utils/dimmesion"
import { color } from "../../../theme"

const CONTAINER: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  height: perfectSize(90),
  borderRadius: perfectSize(5),
  backgroundColor: color.palette.neutral900,
}
const CATEGORY_TITLE: TextStyle = {
  marginTop: perfectSize(16),
  fontSize: perfectSize(13),
  lineHeight: perfectSize(20),
  color: color.palette.neutral400
}

export interface SliderItemProps {
  style?: ViewStyle
  icon?: React.ReactNode
  title?: string
  onPress?: () => void
}

export const CategoryItem = (props) => {
  const { style, title = "", icon, onPress } = props

  return (
    <Pressable style={[CONTAINER, style]} onPress={onPress}>
      {icon}
      <Text style={CATEGORY_TITLE} text={title}/>
    </Pressable>
  )
}