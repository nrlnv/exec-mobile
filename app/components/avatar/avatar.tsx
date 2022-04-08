import * as React from "react"
import { Image, ImageStyle, Pressable, StyleProp, ViewStyle } from "react-native"
import { color } from "../../theme"
import { perfectSize } from "../../utils/dimmesion"
import { useNavigation } from "@react-navigation/native"
import { MY_ACCOUNT_SCREEN } from "../../navigators/screen-name-constants"
import { BASE_URL } from "../../services/api"
import { useAppSelector } from "../../hooks/hooks"
import { selectUser } from "../../services/redux/slices/authSlice"
import FastImage from "react-native-fast-image"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const IMAGE: ImageStyle = {
  width: perfectSize(40),
  height: perfectSize(40),
  borderRadius: perfectSize(22),
  borderWidth: perfectSize(2),
  borderColor: color.palette.white,
}

export interface AvatarProps {
  style?: StyleProp<ViewStyle>
  width?: number,
  height?: number,
}

export const Avatar = (props: AvatarProps) => {
  const { style, width, height } = props
  const navigation = useNavigation()
  const user = useAppSelector(selectUser)
  const {photo = {}} = user || {}
  const avatarUrl = BASE_URL + photo.thumbnail
  const styles = Object.assign({}, CONTAINER, style)
  const imageStyle = Object.assign({}, IMAGE, {width: perfectSize(width || 40), height: perfectSize(height || 40)})

  return (
    <Pressable style={styles} onPress={() => navigation.navigate(MY_ACCOUNT_SCREEN)}>
      <FastImage source={{uri: avatarUrl, priority: FastImage.priority.normal}} style={imageStyle}/>
    </Pressable>
  )
}
