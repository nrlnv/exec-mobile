import { Switch, Text } from "../../../components"
import React from "react"
import { Pressable, StyleProp, TextStyle, ViewStyle } from "react-native"
import { perfectSize } from "../../../utils/dimmesion"
import { color } from "../../../theme"

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  borderColor: color.palette.mineShaft,
  borderBottomWidth: 1,
  alignSelf: "stretch",
  justifyContent: "space-between",
  paddingVertical: perfectSize(20),
  marginTop: perfectSize(10),
}
const TITLE: TextStyle = {
  fontSize: perfectSize(15),
  lineHeight: perfectSize(20),
}
export interface PreferencesItemProps {
  style?: StyleProp<ViewStyle>
  title?: string
  selected?: boolean
  onPress?: () => void
}

export const PreferencesItem = (props:  PreferencesItemProps) => {
  const { style, title = "", selected, onPress } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <Pressable style={styles} onPress={onPress}>
      <Text text={title} style={TITLE}/>
      <Switch value={selected}/>
    </Pressable>
  )
}