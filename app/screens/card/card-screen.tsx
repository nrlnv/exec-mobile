import React, { FC } from "react"
import { Image, ImageStyle, Platform, Pressable, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { DigitalCardContainer, Screen, Text, Wallpaper } from "../../components"
import { color } from "../../theme"
import { APPLE_WALLET, CARD_BG, LOGO_WITH_NAME } from "../../../assets/images"
import { perfectSize } from "../../utils/dimmesion"
import moment from "moment"
import { BASE_URL } from "../../services/api"
import { useAppSelector } from "../../hooks/hooks"
import { selectUser } from "../../services/redux/slices/authSlice"
import FastImage from "react-native-fast-image"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  justifyContent: "center",
}
const CONTAINER: ViewStyle = {

}
const CARD_CONTAINER: ViewStyle = {
  alignItems: "center",
}
const NAME: TextStyle = {
  marginTop: perfectSize(80),
  fontSize: perfectSize(32),
  lineHeight: perfectSize(42),
}
const COMPANY: TextStyle = {
  marginTop: perfectSize(6),
  fontSize: perfectSize(18),
  lineHeight: perfectSize(24),
  color: color.palette.neutral500,
}
const CARD_NUMBER: TextStyle = {
  marginTop: perfectSize(78),
  fontSize: perfectSize(32),
  lineHeight: perfectSize(42),
  color: color.palette.primary500,
}
const MEMBER_SINCE: TextStyle = {
  marginTop: perfectSize(3),
  opacity: 0.5,
  fontSize: perfectSize(13),
  lineHeight: perfectSize(20),
}
const LOGO: ImageStyle = {
  marginTop: perfectSize(75),
  marginBottom: perfectSize(30),
}
const APPLE_WALLET_IMAGE: ImageStyle = {
  alignSelf: "center",
  marginTop: perfectSize(34)
}

export const CardScreen: FC<StackScreenProps<NavigatorParamList, "card">> = () => {

  const user = useAppSelector(selectUser)

  const {firstName = '', lastName = '', membershipId = '', createdAt = '', companyName = '', photo = {}} = user || {}

  const memberId = membershipId.slice(0,4) + ' ' + membershipId.slice(4,8) + ' ' + membershipId.slice(8, 12)

  const avatarUrl = BASE_URL + photo.thumbnail

  return (
    <Screen style={ROOT} preset="fixed">
      <Wallpaper backgroundImage={CARD_BG}/>
      <View style={CONTAINER}>
        <DigitalCardContainer>
          <View style={CARD_CONTAINER}>
            <Text style={NAME} text={`${firstName} ${lastName}`}/>
            <Text style={COMPANY} text={companyName}/>
            <Text style={CARD_NUMBER} text={memberId}/>
            <Text style={MEMBER_SINCE} text={`Member since ${moment(createdAt).format('MMMM Do, YYYY')}`}/>
            <Image source={LOGO_WITH_NAME} style={LOGO}/>
          </View>
        </DigitalCardContainer>
        <FastImage style={styles.avatarImage} source={{uri: avatarUrl, priority: FastImage.priority.normal}}/>
      </View>
      {Platform.OS === 'ios' && (
        <Pressable style={APPLE_WALLET_IMAGE}>
          <Image source={APPLE_WALLET}/>
        </Pressable>
      )}
    </Screen>
  )
}

const styles = StyleSheet.create({
  avatarImage: {
    position: "absolute",
    alignSelf: "center",
    top: perfectSize(-46),
    width: perfectSize(94),
    height: perfectSize(94),
    borderRadius: perfectSize(46),
  }
})