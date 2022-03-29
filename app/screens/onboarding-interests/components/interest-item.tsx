import {Text } from "../../../components"
import React from "react"
import { Pressable, TextStyle, ViewStyle } from "react-native"
import { perfectSize } from "../../../utils/dimmesion"
import { color } from "../../../theme"

const CONTAINER: ViewStyle = {
  flexBasis: "30%",
  alignItems: "center",
  borderRadius: perfectSize(5),
  borderWidth: 1,
  borderColor: color.palette.doveGray,
  alignSelf: "stretch",
  paddingTop: perfectSize(20),
  paddingBottom: perfectSize(14),
  marginTop: perfectSize(10),
}
const TITLE: TextStyle = {
  marginTop: perfectSize(16),
  fontSize: perfectSize(13),
  lineHeight: perfectSize(20),
}
export interface InterestItemProps {
  icon?: React.ReactNode
  title?: string
  selected?: boolean
  onPress?: () => void
}

export const InterestItem = (props:  InterestItemProps) => {
  const { icon, title = "", selected, onPress } = props

  return (
    <Pressable style={CONTAINER} onPress={onPress}>
      {icon}
      <Text text={title} style={TITLE}/>
    </Pressable>
  )
}