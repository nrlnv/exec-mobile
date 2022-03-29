import { Button, FormTextField } from "../../../components"
import React from "react"
import { ViewStyle } from "react-native"
import { perfectSize } from "../../../utils/dimmesion"

const PASSWORD_FIELD: ViewStyle = {
  marginTop: perfectSize(78)
}
const CONFIRM_PASSWORD_FIELD: ViewStyle = {
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
      <FormTextField style={PASSWORD_FIELD} placeholder={"New Password"} control={control} name={"password"} underFieldLabel={"Must be at least 8 characters."}/>
      <FormTextField style={CONFIRM_PASSWORD_FIELD} placeholder={"Confirm Password"} control={control} name={"confirm"} underFieldLabel={"Both passwords must match."}/>
      <Button text={"reset password"} style={ACTION_BUTTON} onPress={handleSubmit}/>
    </>
  )
}