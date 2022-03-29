import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { DigitalCardContainer } from "./digital-card-container"

storiesOf("DigitalCardContainer", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Auth flow form container", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <DigitalCardContainer style={{ height: 500 }} />
      </UseCase>
    </Story>
  ))
