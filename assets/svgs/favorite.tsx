import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Favorite(props) {
  return (
    <Svg
      width={9}
      height={9}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.02.31L2.926 2.647l-2.474.369c-.438.07-.606.632-.286.966l1.767 1.81-.42 2.548c-.068.457.403.808.79.597l2.205-1.212 2.189 1.212c.387.211.858-.14.79-.597l-.42-2.548 1.767-1.81c.32-.334.152-.896-.286-.966l-2.457-.37L4.98.31a.526.526 0 00-.96 0z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Favorite
