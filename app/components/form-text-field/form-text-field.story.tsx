import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { FormTextField } from "./form-text-field"
import { useForm } from "react-hook-form"
import { palette } from "../../theme/palette"

storiesOf("FormTextField", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Form text field", () => React.createElement(() => {
    const { control } = useForm();
    return (
      <Story>
        <UseCase text="Form Text input" usage="Use this for form text input." style={{backgroundColor: palette.black}}>
          <FormTextField control={control} name={"text"} placeholder={"Text input"}/>
        </UseCase>
        <UseCase text="Form password input" usage="Use this for form password input." style={{backgroundColor: palette.black}}>
          <FormTextField control={control} name={"password"} placeholder={"Password"} secure/>
        </UseCase>
        <UseCase text="Form password input with face id" usage="Use this for sign in password when face id is enabled." style={{backgroundColor: palette.black}}>
          <FormTextField control={control} name={"password-face"} placeholder={"Password"} secure biometry/>
        </UseCase>
        <UseCase text="Form text input centered" usage="Use this for field with centered text" style={{backgroundColor: palette.black}}>
          <FormTextField control={control} name={"center"} placeholder={"Centered text"} center/>
        </UseCase>
      </Story>
    )
  }))
