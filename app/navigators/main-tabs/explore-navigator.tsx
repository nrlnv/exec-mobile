import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import React, { useMemo } from "react"
import { EXPLORE_SCREEN } from "../screen-name-constants"
import { ExploreScreen } from "../../screens"

export type NavigatorParamList = {
  explore: undefined

}

const Stack = createStackNavigator<NavigatorParamList>()

export const ExploreStack = () => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    [],
  )
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={EXPLORE_SCREEN}
    >
      <Stack.Screen name={EXPLORE_SCREEN} component={ExploreScreen} />
    </Stack.Navigator>
  )
}