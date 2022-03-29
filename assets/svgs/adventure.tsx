import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Adventure(props) {
  return (
    <Svg
      width={25}
      height={21}
      viewBox="0 0 25 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24.766 18.586l-11.25-17.5C13.32.734 12.89.5 12.5.5c-.43 0-.86.234-1.055.586l-11.25 17.5c-.156.195-.195.43-.195.664 0 .234.04.43.117.625.235.39.625.625 1.133.625h22.5c.43 0 .86-.234 1.094-.625.078-.195.117-.39.117-.586 0-.273-.04-.508-.195-.703zM12.5 1.75L16.484 8h-4.257L10 10.266 8.164 8.469 12.5 1.75zM1.25 19.25L7.5 9.523l2.5 2.5 2.734-2.773h4.57l6.446 10H1.25z"
        fill="#C97E48"
      />
    </Svg>
  )
}

export default Adventure
