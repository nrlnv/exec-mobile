import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import FastImage from "react-native-fast-image"
import { Button, Text } from "../../../components"
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
  const { benefit } = props
  const navigation = useNavigation()
  const image = {uri: BASE_URL + benefit.images[0]}

  const onButtonPress = () => {
    navigation.navigate(BENEFIT_DETAILS_SCREEN, {slug: benefit.slug})
  }

  return (
    <View style={SLIDE_CONTAINER}>
      <FastImage source={image} style={styles.image} />
      <Text style={SLIDE_TITLE} text={benefit.name}/>
      <Text style={SLIDE_DESCRIPTION} text={benefit.benefitSummary}/>
      <Button style={SLIDE_BUTTON} text={"more details"} preset={"selfSize"} onPress={onButtonPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: "100%", // Have to set these to null because android ¯\_(ツ)_/¯
    height: null,
    aspectRatio: 375 / 354,
    opacity: 0.7
  }
})