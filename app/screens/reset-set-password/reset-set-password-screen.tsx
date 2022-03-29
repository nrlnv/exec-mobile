import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Image, ImageStyle, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AuthContainer, AuthGoBack } from "../../components"
import { perfectSize } from "../../utils/dimmesion"
import { LOGO_WITH_NAME } from "../../../assets/images"
import { useForm } from "react-hook-form"
import { ResetForm } from "./components/reset-form"
import { ResetSuccess } from "./components/reset-success"
import { LOGIN_SCREEN } from "../../navigators/screen-name-constants"

const LOGO: ImageStyle = {
  marginTop: perfectSize(59),
}

const GO_BACK: ViewStyle = {
  marginTop: perfectSize(59),
}

type Inputs = {
  password: string
  confirm: string
}
export const ResetSetPasswordScreen: FC<StackScreenProps<NavigatorParamList, "resetSetPassword">> = observer(({ navigation }) => {
  const { control, handleSubmit } = useForm<Inputs>();
  // TODO changing state of request
  const success = false;

  const onResetPassword = (data) => {
    console.log("request access", data)
  }
  const renderForm = (control, handleSubmit) => {
    return (
      <ResetForm control={control} handleSubmit={handleSubmit}/>
    )
  }
  const renderSuccess = () => {
    return (
      <ResetSuccess onActionButton={() => navigation.navigate(LOGIN_SCREEN)}/>
    )
  }
  const renderBottom = (onPress) => {
    return (
      <AuthGoBack style={GO_BACK} onPress={onPress}/>
    )
  }
  return (
    <AuthContainer bottom={renderBottom(navigation.goBack)}>
      <Image source={LOGO_WITH_NAME} style={LOGO}/>
      {!success ? renderForm(control, handleSubmit(onResetPassword)) : renderSuccess()}
    </AuthContainer>
  )
})
