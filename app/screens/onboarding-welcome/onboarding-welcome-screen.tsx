import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AuthContainer, AuthSkip, Button, Text } from "../../components"
import { Image, ImageStyle, TextStyle, ViewStyle } from "react-native"
import { LOGO_WITH_NAME } from "../../../assets/images"
import { perfectSize } from "../../utils/dimmesion"
import { color } from "../../theme"
import { ONBOARDING_INTERESTS_SCREEN } from "../../navigators/screen-name-constants"

const LOGO: ImageStyle = {
  marginTop: perfectSize(59),
}
const WELCOME_TITLE: TextStyle = {
  fontSize: perfectSize(26),
  marginTop: perfectSize(77),

}
const WELCOME_DESCRIPTION: TextStyle = {
  marginTop: perfectSize(24),
  fontSize: perfectSize(16),
  lineHeight: perfectSize(24),
  textAlign: "center",
  color: color.palette.neutral400
}
const GET_STARTED_BUTTON: ViewStyle = {
  marginTop: perfectSize(89),
}
const SKIP: ViewStyle = {
  marginTop: perfectSize(59),
}

export const OnboardingWelcomeScreen: FC<StackScreenProps<NavigatorParamList, "onboardingWelcome">> = observer(({ navigation }) => {

  const onGetStarted = () => {
    navigation.navigate(ONBOARDING_INTERESTS_SCREEN)
  }
  const renderBottom = (onPress) => {
    return (
      <AuthSkip style={SKIP} onPress={onPress}/>
    )
  }
  return (
    <AuthContainer bottom={renderBottom(navigation.goBack)}>
      <Image source={LOGO_WITH_NAME} style={LOGO}/>
      <Text text={"Welcome to Exec"} style={WELCOME_TITLE}/>
      <Text text={"Let us customize your Exec experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, metus eu sollicitudin."} style={WELCOME_DESCRIPTION}/>
      <Button text={"get started"} style={GET_STARTED_BUTTON} onPress={onGetStarted}/>
    </AuthContainer>
    )
})
