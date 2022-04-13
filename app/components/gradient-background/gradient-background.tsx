import * as React from "react"
import { ViewStyle } from "react-native"
// import { LinearGradient, LinearGradientProps } from "expo-linear-gradient"
import LinearGradient from 'react-native-linear-gradient';

const BG_GRADIENT: ViewStyle = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0}

// export interface GradientBackgroundProps extends LinearGradientProps{
//   style?: ViewStyle,
// }

export function GradientBackground(props) {
  const styles = Object.assign({}, BG_GRADIENT, props.style)
  return <LinearGradient colors={props.colors} style={styles} start={props.start} end={props.end} />
}
