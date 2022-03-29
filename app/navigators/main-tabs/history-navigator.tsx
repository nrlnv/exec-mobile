import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import React, { useMemo } from "react"
import { HISTORY_SCREEN } from "../screen-name-constants"
import { HistoryScreen } from "../../screens"

export type NavigatorParamList = {
  history: undefined
}

const Stack = createStackNavigator<NavigatorParamList>()

export const HistoryStack = () => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    [],
  )
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={HISTORY_SCREEN}
    >
      <Stack.Screen name={HISTORY_SCREEN} component={HistoryScreen} />
    </Stack.Navigator>
  )
}