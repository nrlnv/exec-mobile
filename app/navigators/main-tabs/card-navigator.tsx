import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import React, { useMemo } from "react"
import { CARD_SCREEN } from "../screen-name-constants"
import { CardScreen } from "../../screens"

export type NavigatorParamList = {
  card: undefined
}

const Stack = createStackNavigator<NavigatorParamList>()

export const CardStack = () => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    [],
  )
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={CARD_SCREEN}
    >
      <Stack.Screen name={CARD_SCREEN} component={CardScreen} />
    </Stack.Navigator>
  )
}