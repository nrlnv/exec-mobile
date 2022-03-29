import * as React from "react"
import { Image, ImageStyle, Pressable, StyleProp, ViewStyle } from "react-native"
import { color } from "../../theme"
import { perfectSize } from "../../utils/dimmesion"
import { useNavigation } from "@react-navigation/native"
import { MY_ACCOUNT_SCREEN } from "../../navigators/screen-name-constants"

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
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  width?: number,
  height?: number,
  image?: string
}

/**
 * Describe your component here
 */
export const Avatar = (props: AvatarProps) => {
  const { style, image, width, height } = props
  const navigation = useNavigation()
  const styles = Object.assign({}, CONTAINER, style)
  const imageStyle = Object.assign({}, IMAGE, {width: perfectSize(width || 40), height: perfectSize(height || 40)})

  return (
    <Pressable style={styles} onPress={() => navigation.navigate(MY_ACCOUNT_SCREEN)}>
      <Image source={{uri: image}} style={imageStyle}/>
    </Pressable>
  )
}
