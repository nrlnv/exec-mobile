import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import React, { useMemo } from "react"
import {
  LOGIN_SCREEN,
  ONBOARDING_INTERESTS_SCREEN,
  ONBOARDING_PREFERENCES_SCREEN,
  ONBOARDING_SELECT_SCREEN,
  ONBOARDING_WELCOME_SCREEN,
  REQUEST_ACCESS_SCREEN,
  RESET_PASSWORD_SCREEN,
  RESET_SET_PASSWORD_SCREEN,
} from "./screen-name-constants"
import {
  LoginScreen,
  OnboardingInterestsScreen,
  OnboardingPreferencesScreen,
  OnboardingSelectThatDescribesScreen,
  OnboardingWelcomeScreen,
  RequestAccessScreen,
  ResetPasswordScreen,
  ResetSetPasswordScreen,
} from "../screens"
import { View, ViewStyle } from "react-native"
import { Wallpaper } from "../components"
import { CARD_BG } from "../../assets/images"

const CONTAINER: ViewStyle = {
  flex: 1
}
export type NavigatorParamList = {
  loginScreen: undefined
  requestAccessScreen: undefined
  resetPassword: undefined
  resetSetPassword: undefined

  onboardingWelcome: undefined
  onboardingInterests: undefined
  onboardingSelect: undefined
  onboardingPreferences: undefined
}

const Stack = createStackNavigator<NavigatorParamList>()

export const AuthStack = () => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
      presentation: "transparentModal",
      cardStyle: { backgroundColor: 'transparent' }
    }),
    [],
  )
  return (
    <View style={CONTAINER}>
      <Wallpaper backgroundImage={CARD_BG}/>

      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={LOGIN_SCREEN}
        screenListeners={(prop) => ({
          focus: (e) => {
            prop.navigation.setOptions({cardStyle:{opacity: 1}})
          },
          blur: (e) => {
            prop.navigation.setOptions({cardStyle:{opacity: 0}})
          },
        })}
      >
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen}/>
        <Stack.Screen name={REQUEST_ACCESS_SCREEN} component={RequestAccessScreen} />
        <Stack.Screen name={RESET_PASSWORD_SCREEN} component={ResetPasswordScreen} />
        <Stack.Screen name={RESET_SET_PASSWORD_SCREEN} component={ResetSetPasswordScreen} />


        <Stack.Screen name={ONBOARDING_WELCOME_SCREEN} component={OnboardingWelcomeScreen} />
        <Stack.Screen name={ONBOARDING_INTERESTS_SCREEN} component={OnboardingInterestsScreen} />
        <Stack.Screen name={ONBOARDING_SELECT_SCREEN} component={OnboardingSelectThatDescribesScreen} />
        <Stack.Screen name={ONBOARDING_PREFERENCES_SCREEN} component={OnboardingPreferencesScreen} />
      </Stack.Navigator>
    </View>

  )
}