import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FavoritesTab(props) {
  return (
    <Svg
      width={23}
      height={21}
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.875 7.219l-5.703-.82-2.578-5.196c-.43-.898-1.758-.937-2.227 0L7.828 6.398l-5.742.82C1.07 7.376.68 8.626 1.422 9.369l4.101 4.023-.976 5.664c-.156 1.015.937 1.797 1.836 1.328l5.117-2.695 5.078 2.695c.899.469 1.992-.313 1.836-1.328l-.977-5.664 4.102-4.024c.742-.742.352-1.992-.664-2.148zm-4.805 5.703l1.094 6.328-5.664-2.969-5.703 2.969 1.094-6.328-4.61-4.453 6.367-.938L11.5 1.75l2.813 5.781 6.367.938-4.61 4.453z"
        fill={props.color || "#999"}
      />
    </Svg>
  )
}

export default FavoritesTab
