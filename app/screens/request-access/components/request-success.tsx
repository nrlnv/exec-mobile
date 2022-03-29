import { Button, Text } from "../../../components"
import React from "react"
import SuccessTick from "../../../../assets/svgs/success_tick"
import { TextStyle, View, ViewStyle } from "react-native"
import { perfectSize } from "../../../utils/dimmesion"
import { color } from "../../../theme"

const TICK_CONTAINER: ViewStyle = {
  marginTop: perfectSize(70)
}
const THANK_YOU_TEXT: TextStyle = {
  marginTop: perfectSize(27),
  fontSize: perfectSize(26)
}
const THANK_YOU_DESCRIPTION: TextStyle = {
  marginTop: perfectSize(24),
  fontSize: perfectSize(16),
  textAlign: "center",
  lineHeight: perfectSize(24),
  color: color.palette.neutral400
}
const GO_BACK_BUTTON: ViewStyle = {
  marginTop: perfectSize(24),
}

export interface RequestSuccessProps {
  onGoBack?: () => void
}

export const RequestSuccess = (props:  RequestSuccessProps) => {
  const { onGoBack } = props

  return (
    <>
      <View style={TICK_CONTAINER}>
        <SuccessTick/>
      </View>
      <Text text={"Thank you"} style={THANK_YOU_TEXT}/>
      <Text text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, metus eu sollicitudin."} style={THANK_YOU_DESCRIPTION}/>
      <Button text={"GO BACK TO LOGIN"} style={GO_BACK_BUTTON} onPress={onGoBack}/>
    </>
  )
}