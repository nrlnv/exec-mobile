import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { perfectSize } from "../../app/utils/dimmesion"

function Search(props) {
  return (
    <Svg
      width={perfectSize(15)}
      height={perfectSize(15)}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.89 13.574l-3.308-3.308c-.082-.055-.164-.11-.246-.11H9.98a5.726 5.726 0 001.395-3.719C11.375 3.32 8.805.75 5.687.75 2.543.75 0 3.32 0 6.438a5.683 5.683 0 005.688 5.687c1.421 0 2.707-.52 3.718-1.367v.355c0 .082.028.164.082.246l3.309 3.309c.137.137.355.137.465 0l.629-.629c.136-.11.136-.328 0-.465zm-8.203-2.761a4.353 4.353 0 01-4.375-4.376 4.37 4.37 0 014.375-4.375 4.388 4.388 0 014.375 4.376 4.37 4.37 0 01-4.374 4.375z"
        fill="#C97E48"
      />
    </Svg>
  )
}

export default Search
