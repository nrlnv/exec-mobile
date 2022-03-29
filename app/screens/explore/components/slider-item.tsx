import { useNavigation } from "@react-navigation/native"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Text, Wallpaper } from "../../../components"
import { BENEFIT_DETAILS_SCREEN } from "../../../navigators/screen-name-constants"
import { BASE_URL } from "../../../services/api"
import { BenefitPreviewDTO } from "../../../types"
import { perfectSize } from "../../../utils/dimmesion"

const SLIDE_CONTAINER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  // paddingHorizontal: perfectSize(24),
}
const SLIDE_TITLE: TextStyle = {
  fontSize: perfectSize(26),
  lineHeight: perfectSize(34),
  textAlign: "center",
}
const SLIDE_DESCRIPTION: TextStyle = {
  fontSize: perfectSize(16),
  lineHeight: perfectSize(24),
  marginTop: perfectSize(16),
  textAlign: "center",
  maxWidth: '80%'
}
const SLIDE_BUTTON: ViewStyle = {
  marginTop: perfectSize(16),
}

export interface SliderItemProps {
  key?: string
  // title?: string
  // description?: string
  benefit: BenefitPreviewDTO
}

export const SliderItem = (props:  SliderItemProps) => {
  // const { title = "", description = "", onButtonPress } = props
  const { benefit } = props
  const navigation = useNavigation()
  const image = {uri: BASE_URL + benefit.images[0]}

  const onButtonPress = () => {
    navigation.navigate(BENEFIT_DETAILS_SCREEN, {slug: benefit.slug})
  }

  return (
    <View style={SLIDE_CONTAINER}>
      <Wallpaper backgroundImage={image} preset='fullWidth' />
      <Text style={SLIDE_TITLE} text={benefit.name}/>
      <Text style={SLIDE_DESCRIPTION} text={benefit.benefitSummary}/>
      <Button style={SLIDE_BUTTON} text={"more details"} preset={"selfSize"} onPress={onButtonPress}/>
    </View>
  )
}