import React, { FC, useState } from "react"
import { Alert, Image, ImageStyle, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AuthContainer, AuthGoBack } from "../../components"
import { perfectSize } from "../../utils/dimmesion"
import { LOGO_WITH_NAME } from "../../../assets/images"
import { useForm } from "react-hook-form"
import { ResetForm } from "./components/reset-form"
import { ResetSuccess } from "./components/reset-success"
import { openInbox } from "react-native-email-link"
import { BASE_URL } from "../../services/api"
import axios from "axios"
import { useNavigation } from "@react-navigation/native"

const LOGO: ImageStyle = {
  marginTop: perfectSize(59),
}

const GO_BACK: ViewStyle = {
  marginTop: perfectSize(59),
}


type Inputs = {
  email: string
}
export const ResetPasswordScreen = () => {
  const navigation = useNavigation()
  // const { control, handleSubmit } = useForm<Inputs>();
  const [email, setEmail] = useState('')
  // TODO changing state of request
  const success = false;

  const onSendInstructions = async () => {
    const data = {
      email
    }
    try {
      await axios.post(`${BASE_URL}/api/forgot_password`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      Alert.alert('Instructions sent successfully')
      navigation.goBack()
    } catch (error) {
      console.log(error.response.data.error)
      Alert.alert(error.response.data.error)
    }
  }

  const openEmail = async () => {
    try {
      await openInbox();
    } catch (e) {
      console.log("Couldn't open email app on ios simulator")
    }
  }
  const renderForm = (value, onChangeText, onSendInstructions) => {
    return (
      <ResetForm value={value} onChangeText={onChangeText} handleSubmit={onSendInstructions} />
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
      {!success ? renderForm(email, setEmail, onSendInstructions) : renderSuccess(openEmail)}
    </AuthContainer>
  )
}
