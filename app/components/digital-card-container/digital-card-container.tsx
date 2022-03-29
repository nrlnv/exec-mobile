import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import BgIllustration from "./bg_illustration"
import { GradientBackground } from "../gradient-background/gradient-background"
import { color } from "../../theme"
import { perfectSize } from "../../utils/dimmesion"

const CONTAINER: ViewStyle = {
  alignItems: "center",
  marginHorizontal: perfectSize(24),
  paddingBottom: perfectSize(50),
  paddingHorizontal: perfectSize(35),
  borderRadius: perfectSize(20),
  overflow: "hidden",
}
const BG_ILLUSTRATION_CONTAINER: ViewStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  justifyContent: "flex-end",
}
export interface DigitalCardContainerProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  /**
   * Children components.
   */
  children?: React.ReactNode
}

/**
 * Describe your component here
 */
export const DigitalCardContainer = observer(function DigitalCardContainer(props: DigitalCardContainerProps) {
  const { style, children } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <View style={styles}>
      <GradientBackground colors={[color.digitalCardBgGradientStart, color.digitalCardBgGradientEnd]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}/>
      <View style={BG_ILLUSTRATION_CONTAINER}>
        <BgIllustration/>
      </View>
      {children}
    </View>
  )
})
