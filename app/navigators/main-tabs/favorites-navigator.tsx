import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import React, { useMemo } from "react"
import { FAVORITES_SCREEN } from "../screen-name-constants"
import { FavoritesScreen } from "../../screens"

export type NavigatorParamList = {
  favorites: undefined
}

const Stack = createStackNavigator<NavigatorParamList>()

export const FavoritesStack = () => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    [],
  )
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={FAVORITES_SCREEN}
    >
      <Stack.Screen name={FAVORITES_SCREEN} component={FavoritesScreen} />
    </Stack.Navigator>
  )
}