import * as React from "react"
import { View, ImageStyle } from "react-native"
import { perfectSize } from "../../utils/dimmesion"
import { AutoImage as Image } from "../auto-image/auto-image"
import { IconProps } from "./icon.props"
import { icons } from "./icons"

const ROOT: ImageStyle = {
  resizeMode: "contain",
  width: perfectSize(14),
  height: perfectSize(14),
}

export function Icon(props: IconProps) {
  const { style: styleOverride, icon, containerStyle } = props

  return (
    <View style={containerStyle}>
      <Image style={[ROOT, styleOverride]} source={icons[icon]} />
    </View>
  )
}
