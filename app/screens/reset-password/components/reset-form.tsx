import { Button, FormTextField, Text } from "../../../components"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { perfectSize } from "../../../utils/dimmesion"
import { color } from "../../../theme"

const RESET_PASSWORD_TITLE: TextStyle = {
  marginTop: perfectSize(63),
  fontSize: perfectSize(26)
}
const RESET_PASSWORD_DESCRIPTION: TextStyle = {
  marginTop: perfectSize(24),
  fontSize: perfectSize(16),
  lineHeight: perfectSize(24),
  textAlign: "center",
  color: color.palette.neutral400
}
const EMAIL_FIELD: ViewStyle = {
  marginTop: perfectSize(24)
}
const ACTION_BUTTON: ViewStyle = {
  marginTop: perfectSize(24)
}

export interface RequestFormProps {
  control?: any
  handleSubmit?: any
}

export const ResetForm = (props:  RequestFormProps) => {
  const { control, handleSubmit } = props

  return (
    <>
      <Text text={"Reset Password"} style={RESET_PASSWORD_TITLE}/>
      <Text text={"Enter the email associated with your account and we’ll send an email with instructions to reset your password."} style={RESET_PASSWORD_DESCRIPTION}/>
      <FormTextField style={EMAIL_FIELD} placeholder={"Enter your email"} control={control} name={"email"} center/>
      <Button text={"send instructions"} style={ACTION_BUTTON} onPress={handleSubmit}/>
    </>
  )
}