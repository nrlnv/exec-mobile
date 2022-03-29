import { Button, Text } from "../../../components"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { perfectSize } from "../../../utils/dimmesion"
import SuccessTick from "../../../../assets/svgs/success_tick"

const ICON_CONTAINER: ViewStyle = {
  marginTop: perfectSize(130)
}
const TITLE: TextStyle = {
  marginTop: perfectSize(27),
  fontSize: perfectSize(26),
  lineHeight: perfectSize(34),
  textAlign: "center",
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
        <SuccessTick/>
      </View>
      <Text text={"Your password has been changed!"} style={TITLE}/>
      <Button text={"go back to login"} style={BUTTON} onPress={onActionButton}/>
    </>
  )
}