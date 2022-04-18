import * as React from "react"
import { Image, Pressable, StyleProp, TextInput, TextStyle, View, ViewStyle } from "react-native"
import { color } from "../../theme"
import { translate, TxKeyPath } from "../../i18n"
import { Controller } from "react-hook-form"
import { ValidationRules } from "../../utils/validate"
import { perfectSize } from "../../utils/dimmesion"
import { FACE_ID } from "../../../assets/images"
import { Text } from "../text/text"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
  alignSelf: "stretch",
}
const TEXT_INPUT_CONTAINER: ViewStyle = {
  borderColor: color.formTextFieldBorder,
  borderWidth: perfectSize(1),
  borderRadius: perfectSize(5),
  height: perfectSize(56),
  justifyContent: "center",
  backgroundColor: color.formTextFieldBackground
}
const TEXT_INPUT: TextStyle = {
  marginHorizontal: 24,
  fontSize: perfectSize(18),
  color: color.formTextFieldTextColor
}
const FACE_ID_CONTAINER: ViewStyle = {
  position: "absolute",
  right: perfectSize(18),
}
const UNDER_FIELD_LABEL: TextStyle = {
  marginTop: perfectSize(15),
  color: color.palette.neutral500,
  fontSize: 13,
}

// currently, we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

export interface FormTextFieldProps {
  /**
   * The placeholder i18n key.
   */
  placeholderTx?: TxKeyPath

  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string

  /**
   * The label i18n key.
   */
  labelTx?: TxKeyPath

  /**
   * The label text if no labelTx is provided.
   */
  label?: string

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: StyleProp<TextStyle>

  /**
   * Various look & feels.
   */
  preset?: keyof typeof PRESETS
  secure?: boolean,
  onChangeText?: (val) => void,
  underFieldLabel?: string
  control?: any,
  name: string
  initialValue?: string
  rules?: ValidationRules
  defaultValue?: string
  biometry?: boolean
  onBiometry?: () => void
  center?: boolean
  value: string
  forwardedRef?: any
  testID?: string
}

/**
 * Describe your component here
 */
export function FormTextField (props: FormTextFieldProps) {
  const {  value, placeholderTx, placeholder, style, inputStyle, secure, onChangeText, underFieldLabel, control, name, defaultValue, rules, forwardedRef, testID, biometry = false, center,
    onBiometry, ...rest } = props
  const styles = Object.assign({}, CONTAINER, style)
  const inputStyles = Object.assign({}, TEXT_INPUT, inputStyle)
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

  return (
    <View style={styles}>
                  <View style={TEXT_INPUT_CONTAINER}>
                    <TextInput
                      ref={forwardedRef}
                      textAlign={center ? "center" : "left"}
                      // onBlur={onBlur}
                      value={value}
                      style={inputStyles}
                      placeholderTextColor={color.formTextFieldPlaceholder}
                      secureTextEntry={secure}
                      placeholder={actualPlaceholder}
                      onChangeText={(value) => {
                        // onChange(value.trim())
                        onChangeText && onChangeText(value.trim())
                      }}
                      testID={testID}
                      {...rest}
                    />
                    {/* {(!value || value?.length === 0) && biometry && (
                      <Pressable style={FACE_ID_CONTAINER} onPress={onBiometry}>
                        <Image source={FACE_ID}/>
                      </Pressable>
                    )} */}
                  </View>
      {underFieldLabel &&
        <Text style={UNDER_FIELD_LABEL} text={underFieldLabel} />
      }
    </View>
  )
}
