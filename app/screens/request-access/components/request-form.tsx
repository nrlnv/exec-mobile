import { Button, FormTextField, Text } from "../../../components"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { perfectSize } from "../../../utils/dimmesion"
import { color } from "../../../theme"

const REQUEST_ACCESS_TITLE: TextStyle = {
  marginTop: perfectSize(63),
  fontSize: perfectSize(26)
}
const REQUEST_ACCESS_DESCRIPTION: TextStyle = {
  marginTop: perfectSize(24),
  fontSize: perfectSize(16),
  lineHeight: perfectSize(24),
  textAlign: "center",
  color: color.palette.neutral400
}
const EMAIL_FIELD: ViewStyle = {
  marginTop: perfectSize(24)
}
const REQUEST_ACCESS_BUTTON: ViewStyle = {
  marginTop: perfectSize(24)
}


export interface RequestFormProps {
  control?: any
  handleSubmit?: any
}

export const RequestForm = (props:  RequestFormProps) => {
  const { control, handleSubmit } = props

  return (
    <>
      <Text text={"Request Access"} style={REQUEST_ACCESS_TITLE}/>
      <Text text={"Join the waitlist with your work email to request access to the most exclusive benefits program for executives."} style={REQUEST_ACCESS_DESCRIPTION}/>
      <FormTextField style={EMAIL_FIELD} placeholder={"Enter your email"} control={control} name={"email"} center/>
      <Button text={"request access"} style={REQUEST_ACCESS_BUTTON} onPress={handleSubmit}/>
    </>
  )
}