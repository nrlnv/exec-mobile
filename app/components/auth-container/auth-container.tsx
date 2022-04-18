import * as React from "react"
import { View, ViewStyle } from "react-native"
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
export const AuthContainer = (props: AuthContainerProps) => {
  const { children, bottom } = props

  return (
    <Screen style={ROOT} preset="scroll" unsafe>
      <View>
        <DigitalCardContainer>
        {children}
        </DigitalCardContainer>
        {bottom}
      </View>
    </Screen>
  )
}
