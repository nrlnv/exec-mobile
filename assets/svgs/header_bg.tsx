import * as React from "react"
import Svg, { G, Path} from "react-native-svg"

function HeaderBg(props) {
  return (
    <Svg
      width={'100%'}
      height={114}
      preserveAspectRatio="xMinYMin slice"
      viewBox="0 0 375 114"
      fill="none"
      {...props}
    >
      <G>
        <Path
          d="M0 17.5c4.481 0 8.778-1.784 11.94-4.96l3.279-3.29A28.039 28.039 0 0135.083 1h304.072c7.596 0 14.894 2.96 20.345 8.25l3.477 3.375A17.262 17.262 0 00375 17.5V83H0V17.5z"
          fill="#181818"
        />
      </G>
    </Svg>
  )
}

export default HeaderBg
