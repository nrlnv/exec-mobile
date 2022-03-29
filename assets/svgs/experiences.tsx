import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Experiences(props) {
  return (
    <Svg
      width={26}
      height={21}
      viewBox="0 0 26 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M25.393.773l-.43-.195a.455.455 0 00-.624.195l-5.196 10.704C2.385 8.352 3.48 8.547 3.128 8.547 1.8 8.547.667 9.64.667 11.047V18c0 1.406 1.093 2.5 2.5 2.5h11.68c.937 0 1.835-.547 2.226-1.406l8.516-17.696a.455.455 0 00-.196-.625zm-7.187 12.618l-2.188 4.453c-.43.86-1.289 1.406-2.226 1.406H3.167c-.703 0-1.25-.547-1.25-1.25v-.625h3.437a.308.308 0 00.313-.313v-.625a.336.336 0 00-.313-.312H1.917v-2.5h3.437a.308.308 0 00.313-.313v-.624a.336.336 0 00-.313-.313H1.917v-1.328c0-.703.547-1.25 1.21-1.25.196 0-.741-.195 14.61 2.695.43.078.664.508.469.899z"
        fill={props.color || "#C97E48"}
      />
    </Svg>
  )
}

export default Experiences
