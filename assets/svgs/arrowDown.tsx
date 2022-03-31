import * as React from "react"
import Svg, { Path } from "react-native-svg"


const ArrowDown = (props) => {
    const {color = "#999", width = 14, height = 8 } = props
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
            d="m12.934 1.344-.52-.547c-.137-.137-.355-.137-.465 0L7 5.747 2.023.796C1.914.66 1.695.66 1.56.797l-.52.547c-.137.11-.137.328 0 .465l5.715 5.714a.315.315 0 0 0 .465 0l5.715-5.714c.136-.137.136-.356 0-.465Z"
            fill={color}
            />
        </Svg>
    )
}

export default ArrowDown
