import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AuthContainer, AuthGoBack } from "../../components"
import { Image, ImageStyle, ViewStyle } from "react-native"
import { LOGO_WITH_NAME } from "../../../assets/images"
import { perfectSize } from "../../utils/dimmesion"
import { useForm } from "react-hook-form"
import { RequestSuccess } from "./components/request-success"
import { RequestForm } from "./components/request-form"


const LOGO: ImageStyle = {
  marginTop: perfectSize(59),
}
const GO_BACK: ViewStyle = {
  marginTop: perfectSize(59),
}

type Inputs = {
  email: string
}

const onRequestAccess = (data) => {
  console.log("request access", data)
}

export const RequestAccessScreen: FC<StackScreenProps<NavigatorParamList, "requestAccessScreen">> = observer(({ navigation }) => {
  const { control, handleSubmit } = useForm<Inputs>();
  // TODO changing state of request
  const success = true;

  return (
    <AuthContainer bottom={<AuthGoBack style={GO_BACK} onPress={navigation.goBack}/>}>
      <Image source={LOGO_WITH_NAME} style={LOGO}/>
      {!success
        ? <RequestForm control={control} handleSubmit={handleSubmit(onRequestAccess)}/>
        : <RequestSuccess onGoBack={navigation.goBack}/>
      }
    </AuthContainer>
    )
})
