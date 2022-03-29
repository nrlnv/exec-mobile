import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AuthContainer, AuthSkip, Button, Text } from "../../components"
import { perfectSize } from "../../utils/dimmesion"
import { ONBOARDING_SELECT_SCREEN } from "../../navigators/screen-name-constants"
import { color } from "../../theme"
import { InterestItem } from "./components/interest-item"
import Hotel from "../../../assets/svgs/hotel"
import Lifestyle from "../../../assets/svgs/lifestyle"
import Travel from "../../../assets/svgs/travel"
import Business from "../../../assets/svgs/business"
import Restaurant from "../../../assets/svgs/restaurant"
import Adventure from "../../../assets/svgs/adventure"

const STEP: TextStyle = {
  marginTop: perfectSize(46),
  alignSelf: "flex-start",
  color: color.palette.neutral500,
}
const TITLE: TextStyle = {
  alignSelf: "flex-start",
  fontSize: perfectSize(26),
  marginTop: perfectSize(5)
}
const ITEM_CONTAINER: ViewStyle = {
  alignSelf: "stretch",
  flexDirection: "row",
  marginTop: perfectSize(40),
  flexWrap: "wrap",
  justifyContent: "space-between",
}
const NEXT: ViewStyle = {
  marginTop: perfectSize(55),
}
const SKIP: ViewStyle = {
  marginTop: perfectSize(59),
}
export const OnboardingInterestsScreen: FC<StackScreenProps<NavigatorParamList, "onboardingInterests">> = observer(({ navigation }) => {

  const onNext = () => {
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
      <Text text={"Step 1 of 3"} style={STEP}/>
      <Text text={"Choose your interests"} style={TITLE}/>
      <View style={ITEM_CONTAINER}>
        <InterestItem title={"Hotels"} icon={<Hotel/>}/>
        <InterestItem title={"Lifestyle"} icon={<Lifestyle/>}/>
        <InterestItem title={"Travel"} icon={<Travel/>}/>
        <InterestItem title={"Business"} icon={<Business/>}/>
        <InterestItem title={"Restaurants"} icon={<Restaurant/>}/>
        <InterestItem title={"Adventure"} icon={<Adventure/>}/>
      </View>
      <Button text={"next"} onPress={onNext} style={NEXT}/>
    </AuthContainer>
  )
})
