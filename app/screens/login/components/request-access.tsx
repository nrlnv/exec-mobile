import { Button, Text } from "../../../components"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { perfectSize } from "../../../utils/dimmesion"
import { color } from "../../../theme"

const DONT_HAVE_ACCOUNT_TEXT: TextStyle = {
  marginTop: perfectSize(44),
  fontSize: perfectSize(15),
  color: color.palette.neutral500,
  alignSelf: "center",
}
const REQUEST_ACCESS_BUTTON: ViewStyle = {
  marginTop: perfectSize(15),
  alignSelf: "center",
}
const REQUEST_ACCESS_BUTTON_TEXT: TextStyle = {
  fontSize: perfectSize(15),
  textDecorationLine: "underline",
}

export interface RequestAccessProps {
  onRequestAccess?: () => void
}

export const RequestAccess = (props:  RequestAccessProps) => {
  const { onRequestAccess } = props

  return (
    <>
      <Text text={"Don't have an account?"} style={DONT_HAVE_ACCOUNT_TEXT}/>
      <Button text={"Request access"} preset={"link"} style={REQUEST_ACCESS_BUTTON} textStyle={REQUEST_ACCESS_BUTTON_TEXT} onPress={onRequestAccess}/>
    </>
  )
}