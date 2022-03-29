import * as React from "react"
import { Pressable, StyleProp, TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../text/text"
import ArrowLeft from "../../../assets/svgs/arrow_left"
import { perfectSize } from "../../utils/dimmesion"

const CONTAINER: ViewStyle = {
  alignSelf: "center",
  flexDirection: "row",
  alignItems: "center",
}
const TEXT: TextStyle = {
  fontSize: perfectSize(15),
  marginLeft: perfectSize(10),
}

export interface AuthGoBackProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  text?: string
  onPress?: () => void
}

/**
 * Describe your component here
 */
export const AuthGoBack = observer(function AuthGoBack(props: AuthGoBackProps) {
  const { style, text, onPress } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <Pressable style={styles} onPress={onPress}>
      <ArrowLeft/>
      <Text text={text || "Go back"} style={TEXT}/>
    </Pressable>
  )
})
