import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AuthContainer, AuthSkip, Button, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { ONBOARDING_SELECT_SCREEN } from "../../navigators/screen-name-constants"
import { perfectSize } from "../../utils/dimmesion"
import { PreferencesItem } from "./components/preferences-item"

const STEP: TextStyle = {
  marginTop: perfectSize(46),
  alignSelf: "flex-start",
  color: color.palette.neutral500,
}
const TITLE: TextStyle = {
  alignSelf: "flex-start",
  fontSize: perfectSize(26),
  marginTop: perfectSize(5),
  lineHeight: perfectSize(34)
}
const NEXT: ViewStyle = {
  marginTop: perfectSize(55),
}
const SKIP: ViewStyle = {
  marginTop: perfectSize(59),
}

export const OnboardingPreferencesScreen: FC<StackScreenProps<NavigatorParamList, "onboardingPreferences">> = observer(function OnboardingPreferencesScreen({navigation}) {

  const onExplore = () => {
    navigation.navigate(ONBOARDING_SELECT_SCREEN)
  }
  const skip = () => {
    navigation.navigate(ONBOARDING_SELECT_SCREEN)
  }
  const renderBottom = (onPress) => {
    return (
      <AuthSkip style={SKIP} onPress={onPress}/>
    )
  }

  return (
    <AuthContainer bottom={renderBottom(skip)}>
      <Text text={"Step 3 of 3"} style={STEP}/>
      <Text text={"Choose your preferences"} style={TITLE}/>
      <PreferencesItem title={"Lorem ipsum dolor"} selected/>
      <PreferencesItem title={"Lorem ipsum"}/>
      <PreferencesItem title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
      <Button text={"explore exec benefits"} onPress={onExplore} style={NEXT}/>
    </AuthContainer>
  )
})
