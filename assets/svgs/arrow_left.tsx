import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { perfectSize } from "../../app/utils/dimmesion"

function ArrowLeft(props) {
  const {color = '#fff'} = props
  return (
    <Svg
      width={perfectSize(15)}
      height={perfectSize(15)}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.768 13.82l.205-.205a.337.337 0 000-.498L2.758 7.873h11.015a.356.356 0 00.352-.352V7.23a.378.378 0 00-.352-.352H2.758l5.215-5.215a.337.337 0 000-.498L7.768.96a.337.337 0 00-.498 0L1.088 7.141a.337.337 0 000 .498L7.27 13.82a.337.337 0 00.498 0z"
        fill={color}
      />
    </Svg>
  )
}

export default ArrowLeft
