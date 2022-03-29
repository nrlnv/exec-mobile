import {Text } from "../../../components"
import React from "react"
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { perfectSize } from "../../../utils/dimmesion"
import { color } from "../../../theme"

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  borderRadius: perfectSize(5),
  borderWidth: 1,
  borderColor: color.palette.doveGray,
  alignSelf: "stretch",
  padding: perfectSize(16),
  marginTop: perfectSize(10),
}
const TEXT_CONTAINER: ViewStyle = {
  marginLeft: perfectSize(16),
}
const TITLE: TextStyle = {
  fontSize: perfectSize(18),
  lineHeight: perfectSize(24),
}
const DESCRIPTION: TextStyle = {
  marginTop: perfectSize(4),
  fontSize: perfectSize(15),
  lineHeight: perfectSize(20),
  color: color.palette.neutral400
}
export interface DescriptionItemProps {
  style?: StyleProp<ViewStyle>
  icon?: React.ReactNode
  title?: string
  description?: string
  selected?: boolean
  onPress?: () => void
}

export const DescriptionItem = (props:  DescriptionItemProps) => {
  const { style, icon, title = "", description = "", selected, onPress } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <Pressable style={styles} onPress={onPress}>
      {icon}
      <View style={TEXT_CONTAINER}>
        <Text text={title} style={TITLE}/>
        <Text text={description} style={DESCRIPTION}/>
      </View>
    </Pressable>
  )
}