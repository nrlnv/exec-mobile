import React, { FC, useEffect } from "react"
import { Image, ImageStyle, Pressable, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { DigitalCardContainer, Screen, Text, Wallpaper } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { APPLE_WALLET, CARD_BG, LOGO_WITH_NAME } from "../../../assets/images"
import { perfectSize } from "../../utils/dimmesion"
import { useLazyQuery } from "@apollo/client"
import { GET_CURRENT_USER } from "../../services/api/queries"
import moment from "moment"
import { BASE_URL } from "../../services/api"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  justifyContent: "center",
}
const CONTAINER: ViewStyle = {

}
const AVATAR_IMAGE: ImageStyle = {
  position: "absolute",
  alignSelf: "center",
  top: perfectSize(-46),
  width: perfectSize(94),
  height: perfectSize(94),
  borderRadius: perfectSize(46),
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

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `card: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="card" component={CardScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const CardScreen: FC<StackScreenProps<NavigatorParamList, "card">> = () => {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const [getCurrentUser, { data: userData }] = useLazyQuery(GET_CURRENT_USER)

  useEffect(() => {
    ;(async () => {
      await getCurrentUser()
    })()
  }, [getCurrentUser])

  const {firstName = '', lastName = '', membershipId = '', createdAt = '', companyName = '', photo = {}} = userData?.currentUser || {}

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
        <Image style={AVATAR_IMAGE} source={{uri: avatarUrl}}/>
      </View>

      <Pressable style={APPLE_WALLET_IMAGE}>
        <Image source={APPLE_WALLET}/>
      </Pressable>
    </Screen>
  )
}