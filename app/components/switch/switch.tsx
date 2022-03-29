import React from "react"
import { ViewStyle, Animated, Easing, TouchableWithoutFeedback } from "react-native"
import { color } from "../../theme"
import { SwitchProps } from "./switch.props"
import { perfectSize } from "../../utils/dimmesion"

// dimensions
const THUMB_SIZE = perfectSize(16)
const WIDTH = perfectSize(36)
const MARGIN = perfectSize(4)
const OFF_POSITION = -0.5
const ON_POSITION = WIDTH - THUMB_SIZE - MARGIN
const BORDER_RADIUS = (THUMB_SIZE * 3) / 4

// colors
const ON_COLOR = color.palette.neutral800
const OFF_COLOR = color.palette.neutral800
const BORDER_ON_COLOR = ON_COLOR
const BORDER_OFF_COLOR = ON_COLOR

// animation
const DURATION = 250

// the track always has these props
const TRACK = {
  height: THUMB_SIZE + MARGIN,
  width: WIDTH,
  borderRadius: BORDER_RADIUS,
  borderWidth: MARGIN / 2,
}

// the thumb always has these props
const THUMB: ViewStyle = {
  position: "absolute",
  width: THUMB_SIZE,
  height: THUMB_SIZE,
  borderRadius: THUMB_SIZE / 2,
  backgroundColor: color.palette.white,
}

const makeAnimatedValue = (switchOn) => new Animated.Value(switchOn ? 1 : 0)

export function Switch(props: SwitchProps) {
  const [timer] = React.useState<Animated.Value>(makeAnimatedValue(props.value))
  const startAnimation = React.useMemo(
    () => (newValue: boolean) => {
      const toValue = newValue ? 1 : 0
      const easing = Easing.out(Easing.circle)
      Animated.timing(timer, {
        toValue,
        duration: DURATION,
        easing,
        useNativeDriver: true,
      }).start()
    },
    [timer],
  )

  const [previousValue, setPreviousValue] = React.useState<boolean>(props.value)
  React.useEffect(() => {
    if (props.value !== previousValue) {
      startAnimation(props.value)
      setPreviousValue(props.value)
    }
  }, [props.value])

  const handlePress = React.useMemo(
    () => () => props.onToggle && props.onToggle(!props.value),
    [props.onToggle, props.value],
  )

  if (!timer) {
    return null
  }

  const translateX = timer.interpolate({
    inputRange: [0, 1],
    outputRange: [OFF_POSITION, ON_POSITION],
  })

  const style = props.style

  const trackStyle = [
    TRACK,
    {
      backgroundColor: props.value ? ON_COLOR : OFF_COLOR,
      borderColor: props.value ? BORDER_ON_COLOR : BORDER_OFF_COLOR,
    },
    props.value ? props.trackOnStyle : props.trackOffStyle,
  ]

  const thumbStyle = [
    THUMB,
    {
      transform: [{ translateX }],
    },
    props.value ? props.thumbOnStyle : props.thumbOffStyle,
  ]

  return (
    <TouchableWithoutFeedback onPress={handlePress} style={style}>
      <Animated.View style={trackStyle}>
        <Animated.View style={thumbStyle} />
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}
