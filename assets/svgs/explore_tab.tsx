import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ExploreTab(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.344 19.328l-5.04-5.039a.443.443 0 00-.312-.117h-.43c1.368-1.485 2.188-3.399 2.188-5.547C16.75 4.172 13.078.5 8.625.5 4.133.5.5 4.172.5 8.625a8.119 8.119 0 008.125 8.125c2.11 0 4.063-.82 5.508-2.148v.39c0 .156.039.274.117.352l5.04 5.039a.45.45 0 00.663 0l.39-.39a.45.45 0 000-.665zM8.625 15.5A6.836 6.836 0 011.75 8.625 6.86 6.86 0 018.625 1.75c3.79 0 6.875 3.086 6.875 6.875A6.86 6.86 0 018.625 15.5z"
        fill={props.color || "#C97E48"}
      />
    </Svg>
  )
}

export default ExploreTab
