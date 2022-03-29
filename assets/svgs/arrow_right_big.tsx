import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowRightBig(props) {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.521.945l-.273.274a.45.45 0 000 .664L15.2 8.836H.552a.475.475 0 00-.469.469v.39c0 .274.196.47.47.47H15.2l-6.953 6.991a.45.45 0 000 .664l.273.274a.45.45 0 00.664 0l8.242-8.242a.45.45 0 000-.665L9.185.945a.45.45 0 00-.664 0z"
        fill={props.color || "#C97E48"}
      />
    </Svg>
  )
}

export default ArrowRightBig
