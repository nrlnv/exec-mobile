import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { perfectSize } from "../../../utils/dimmesion"

function LeftSvg(props) {
  return (
    <Svg
      width={perfectSize(35)}
      height={perfectSize(35)}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 35h35V17.688a25.966 25.966 0 01-18.35-7.595l-5.475-5.468A15.813 15.813 0 000 0v35z"
        fill="#000"
      />
    </Svg>
  )
}

export default LeftSvg
