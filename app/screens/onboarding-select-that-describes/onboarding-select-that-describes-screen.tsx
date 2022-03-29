import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AuthContainer, AuthSkip, Button, Text } from "../../components"
import { color } from "../../theme"
import { ONBOARDING_PREFERENCES_SCREEN } from "../../navigators/screen-name-constants"
import { perfectSize } from "../../utils/dimmesion"
import { DescriptionItem } from "./components/description-item"
import Building from "../../../assets/svgs/building"
import Person from "../../../assets/svgs/person"
import Analytics from "../../../assets/svgs/analytics"

const STEP: TextStyle = {
  marginTop: perfectSize(46),
  alignSelf: "flex-start",
  color: color.palette.neutral500,
}
const TITLE: TextStyle = {
  alignSelf: "flex-start",
  fontSize: perfectSize(26),
  marginTop: perfectSize(5),
  lineHeight: perfectSize(34),
}
const FIRST_DESCRIPTION: ViewStyle = {
  marginTop: perfectSize(26),
}
const SKIP: ViewStyle = {
  marginTop: perfectSize(59),
}
const NEXT: ViewStyle = {
  marginTop: perfectSize(28),
}
export const OnboardingSelectThatDescribesScreen: FC<StackScreenProps<NavigatorParamList, "onboardingSelect">> = observer(({ navigation }) => {
  const onNext = () => {
    navigation.navigate(ONBOARDING_PREFERENCES_SCREEN)
  }
  const skip = () => {
    navigation.navigate(ONBOARDING_PREFERENCES_SCREEN)
  }
  const renderBottom = (onPress) => {
    return (
      <AuthSkip style={SKIP} onPress={onPress}/>
    )
  }
  return (
    <AuthContainer bottom={renderBottom(skip)}>
      <Text text={"Step 2 of 3"} style={STEP}/>
      <Text text={"Select one that best describes you"} style={TITLE}/>
      <DescriptionItem style={FIRST_DESCRIPTION} title={"Lorem ipsum dolor"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} icon={<Building/>}/>
      <DescriptionItem title={"Lorem ipsum dolor"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} icon={<Person/>}/>
      <DescriptionItem title={"Lorem ipsum dolor"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} icon={<Analytics/>}/>
      <Button text={"next"} onPress={onNext} style={NEXT}/>
    </AuthContainer>
  )
})
