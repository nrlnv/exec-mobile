import { Button, Text } from "../../../components"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { perfectSize } from "../../../utils/dimmesion"
import { color } from "../../../theme"
import EnvelopeOpen from "../../../../assets/svgs/envelope_open"

const ICON_CONTAINER: ViewStyle = {
  marginTop: perfectSize(95)
}
const TITLE: TextStyle = {
  marginTop: perfectSize(27),
  fontSize: perfectSize(26)
}
const DESCRIPTION: TextStyle = {
  marginTop: perfectSize(24),
  fontSize: perfectSize(16),
  textAlign: "center",
  lineHeight: perfectSize(24),
  color: color.palette.neutral400
}
const BUTTON: ViewStyle = {
  marginTop: perfectSize(24),
}

export interface RequestSuccessProps {
  onActionButton?: () => void
}

export const ResetSuccess = (props:  RequestSuccessProps) => {
  const { onActionButton } = props

  return (
    <>
      <View style={ICON_CONTAINER}>
        <EnvelopeOpen/>
      </View>
      <Text text={"Check Your Email"} style={TITLE}/>
      <Text text={"We have sent a password recover instructions to your email."} style={DESCRIPTION}/>
      <Button text={"open email app"} style={BUTTON} onPress={onActionButton}/>
    </>
  )
}