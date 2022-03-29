/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React, { useMemo } from "react"
import { useColorScheme, View } from "react-native"
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import { AUTH_STACK, MAIN_STACK } from "./screen-name-constants"
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import { AuthStack } from "./auth-navigator"
import { MainTabsNavigator, MainTabsStackNavigator } from "./main-tabs-navigator"
import { color } from "../theme"
import { useAppSelector } from "../hooks/hooks"
import { selectToken } from "../services/redux/slices/authSlice"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  authStack: undefined
  mainStack: undefined
  history: undefined
  favorites: undefined
  myAccount: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<NavigatorParamList>()

const AppStack = () => {
  const loggedOut = false;
  const token = useAppSelector(selectToken)
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
      presentation: "transparentModal",
      cardStyle: { backgroundColor: 'transparent' }
    }),
    [],
  )
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={AUTH_STACK}
    >
      {!token
        ? <Stack.Screen name={AUTH_STACK} component={AuthStack} />
        : <Stack.Screen name={MAIN_STACK} component={MainTabsStackNavigator} />
      }
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {

  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  const navTheme = {
    ...colorScheme === "dark" ? DarkTheme : DefaultTheme,
    colors: {
      ...colorScheme === "dark" ? DarkTheme.colors : DefaultTheme.colors,
      background: 'transparent',
    },
  };
  return (
    <View style={{flex: 1, backgroundColor: color.palette.black}}>
      <NavigationContainer
        ref={navigationRef}
        theme={navTheme}
        {...props}
      >
        <AppStack />
      </NavigationContainer>
    </View>

  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
