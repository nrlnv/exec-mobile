import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { perfectSize } from "../../app/utils/dimmesion"

function ArrowRight(props) {
  return (
    <Svg
      width={perfectSize(15)}
      height={perfectSize(15)}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.328.959l-.205.205a.337.337 0 000 .498l5.215 5.215H.352A.356.356 0 000 7.229v.292c0 .206.146.352.352.352h10.986l-5.215 5.244a.337.337 0 000 .498l.205.205a.337.337 0 00.498 0l6.182-6.181a.337.337 0 000-.498L6.826.959a.337.337 0 00-.498 0z"
        fill={props.color || "#fff"}
      />
    </Svg>
  )
}

export default ArrowRight
