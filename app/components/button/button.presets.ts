import { ViewStyle, TextStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
import { perfectSize } from "../../utils/dimmesion"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  alignSelf: "stretch",
  paddingVertical: perfectSize(16),
  paddingHorizontal: spacing[2],
  borderRadius: perfectSize(5),
  justifyContent: "center",
  alignItems: "center",
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
  fontFamily: typography.primary,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE_VIEW, backgroundColor: color.primaryButtonBg } as ViewStyle,
  selfSize: { ...BASE_VIEW, backgroundColor: color.primaryButtonBg, alignSelf: "center", } as ViewStyle,


  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
  } as ViewStyle,
}

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: { ...BASE_TEXT, fontSize:  perfectSize(13), color: color.primaryButtonText, textTransform: "uppercase", fontWeight: "700" } as TextStyle,
  selfSize: { ...BASE_TEXT, fontSize:  perfectSize(13), color: color.primaryButtonText, textTransform: "uppercase", fontWeight: "700" } as TextStyle,
  link: {
    ...BASE_TEXT,
    color: color.text,
    paddingHorizontal: 0,
    paddingVertical: 0,
    fontSize: perfectSize(13),
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
