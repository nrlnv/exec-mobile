import * as React from "react"
import { Pressable, StyleProp, TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../text/text"
import { perfectSize } from "../../utils/dimmesion"
import ArrowRight from "../../../assets/svgs/arrow_right"

const CONTAINER: ViewStyle = {
  alignSelf: "center",
  flexDirection: "row",
  alignItems: "center",
}
const TEXT: TextStyle = {
  fontSize: perfectSize(15),
  marginRight: perfectSize(10),
}

export interface AuthSkipProps {
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
export const AuthSkip = observer(function AuthSkip(props: AuthSkipProps) {
  const { style, text, onPress } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <Pressable style={styles} onPress={onPress}>
      <Text text={text || "Skip this step"} style={TEXT}/>
      <ArrowRight/>
    </Pressable>
  )
})
