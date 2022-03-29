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
import { openInbox } from "react-native-email-link"

const LOGO: ImageStyle = {
  marginTop: perfectSize(59),
}

const GO_BACK: ViewStyle = {
  marginTop: perfectSize(59),
}


type Inputs = {
  email: string
}
export const ResetPasswordScreen: FC<StackScreenProps<NavigatorParamList, "resetPassword">> = observer(({ navigation }) => {
  const { control, handleSubmit } = useForm<Inputs>();
  // TODO changing state of request
  const success = false;

  const onSendInstructions = (data) => {
    console.log("request access", data)
  }
  const openEmail = async () => {
    try {
      await openInbox();
    } catch (e) {
      console.log("Couldn't open email app on ios simulator")
    }
  }
  const renderForm = (control, handleSubmit) => {
    return (
      <ResetForm control={control} handleSubmit={handleSubmit}/>
    )
  }
  const renderSuccess = (openEmail) => {
    return (
      <ResetSuccess onActionButton={openEmail}/>
    )
  }
  const renderBottom = (onPress, text) => {
    return (
      <AuthGoBack style={GO_BACK} onPress={onPress} text={text}/>
    )
  }
  return (
    <AuthContainer bottom={renderBottom(navigation.goBack, success ? "Skip, I'll confirm later" : null)}>
      <Image source={LOGO_WITH_NAME} style={LOGO}/>
      {!success ? renderForm(control, handleSubmit(onSendInstructions)) : renderSuccess(openEmail)}
    </AuthContainer>
  )
})
