import * as React from "react"
import { View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import { Wallpaper } from "../wallpaper/wallpaper"
import { CARD_BG } from "../../../assets/images"
import { Screen } from "../screen/screen"
import { DigitalCardContainer } from "../digital-card-container/digital-card-container"

const ROOT: ViewStyle = {
  // backgroundColor: color.transparent,
  flex: 1,
  justifyContent: "center",
}

export interface AuthContainerProps {
  /**
   * An optional style override useful for padding & margin.
   */
  /**
   * Children components.
   */
  children?: React.ReactNode
  bottom?: React.ReactNode
}

/**
 * Describe your component here
 */
export const AuthContainer = observer(function AuthContainer(props: AuthContainerProps) {
  const { children, bottom } = props

  return (
    <Screen style={ROOT} preset="scroll" unsafe>
      {/* <Wallpaper backgroundImage={CARD_BG}/> */}
      <View>
        <DigitalCardContainer>
        {children}
        </DigitalCardContainer>
        {bottom}
      </View>
    </Screen>
  )
})
