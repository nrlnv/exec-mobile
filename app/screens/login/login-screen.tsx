import React, { FC, useState } from "react"
import { Image, ImageStyle, TextStyle, ViewStyle, Alert } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AuthContainer, Button, FormTextField } from "../../components"
import { color } from "../../theme"
import { LOGO_WITH_NAME } from "../../../assets/images"
import { perfectSize } from "../../utils/dimmesion"
import {
  REQUEST_ACCESS_SCREEN,
  RESET_PASSWORD_SCREEN,
} from "../../navigators/screen-name-constants"
import { RequestAccess } from "./components/request-access"
import { NavigatorParamList } from "../../navigators/auth-navigator"
import { useMutation } from "@apollo/client"
import { useAppDispatch } from "../../hooks/hooks"
import { setToken } from "../../services/redux/slices/authSlice"
import { LOGIN_MUTATION } from "../../services/api/mutations"

const LOGO: ImageStyle = {
  marginTop: perfectSize(86),
}
const USERNAME_FIELD: ViewStyle = {
  marginTop: perfectSize(86),
}
const PASSWORD_FIELD: ViewStyle = {
  marginTop: perfectSize(24),
}
const FORGOT_PASSWORD_BUTTON: ViewStyle = {
  marginTop: perfectSize(15),
  alignSelf: "flex-end",
}
const FORGOT_PASSWORD_BUTTON_TEXT: TextStyle = {
  color: color.palette.neutral500,
}
const LOGIN_BUTTON: ViewStyle = {
  marginTop: perfectSize(32),
}

export const LoginScreen: FC<StackScreenProps<NavigatorParamList, "loginScreen">> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginErrorMessage, setLoginErrorMessage] = useState('')

  const isDisabled = email && password && !loading

  const forgotPassword = () => {
    navigation.navigate(RESET_PASSWORD_SCREEN)
    // navigation.navigate(RESET_SET_PASSWORD_SCREEN)
  }
  const onLogin = async () => {
    try {
      const resp = await login({ variables: { email, password } })
      const { credentials } = resp.data.login
      dispatch(setToken(credentials))
    } catch (err) {
      // setLoginErrorMessage(err?.response?.data?.error)
      Alert.alert(err.message)
    }
  }
  const requestAccess = () => {
    navigation.navigate(REQUEST_ACCESS_SCREEN)
  }
  const renderBottom = () => {
    return (
      <RequestAccess onRequestAccess={requestAccess}/>
    )
  }
  return (
   <AuthContainer>
        <Image source={LOGO_WITH_NAME} style={LOGO}/>
        <FormTextField style={USERNAME_FIELD} placeholder={"Email, or username"} value={email} name={"emailUsername"} onChangeText={setEmail} />
        <FormTextField style={PASSWORD_FIELD} placeholder={"Password"} value={password} name={"password"} secure biometry onChangeText={setPassword} />
        <Button text={"Forgot password?"} preset={"link"} style={FORGOT_PASSWORD_BUTTON} textStyle={FORGOT_PASSWORD_BUTTON_TEXT} onPress={forgotPassword}/>
        <Button text={"log in"} style={LOGIN_BUTTON} onPress={onLogin} disabled={!isDisabled} />
   </AuthContainer>
  )
}
