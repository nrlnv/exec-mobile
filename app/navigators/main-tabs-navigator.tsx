/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

import { BENEFIT_DETAILS_SCREEN, CARD_TAB, CATEGORY_SCREEN, DESTINATION_SCREEN, EXPLORE_TAB, FAVORITES_TAB, HISTORY_TAB, MY_ACCOUNT_SCREEN } from "./screen-name-constants"
import { ExploreStack } from "./main-tabs/explore-navigator"
import { CardStack } from "./main-tabs/card-navigator"
import { HistoryStack } from "./main-tabs/history-navigator"
import { FavoritesStack } from "./main-tabs/favorites-navigator"
import { MainTabs } from "./components/main-tabs"
import ExploreTab from "../../assets/svgs/explore_tab"
import CardTab from "../../assets/svgs/card_tab"
import HistoryTab from "../../assets/svgs/history_tab"
import FavoritesTab from "../../assets/svgs/favorites_tab"
import { BenefitDetails, MyAccountScreen } from "../screens"
import { CategoryScreen } from "../screens/category/categoryScreen"
import { DestinationScreen } from "../screens/destination/destinationScreen"

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
export type PrimaryParamList = {
  exploreTab: undefined
  cardTab: undefined
  historyTab: undefined
  favoritesTab: undefined
}

// Documentation: https://github.com/software-mansion/react-native-screens/tree/master/native-stack
const Tab = createBottomTabNavigator<PrimaryParamList>()

export function MainTabsNavigator() {

  return (
    <Tab.Navigator
      initialRouteName={EXPLORE_TAB}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MainTabs {...props}/>}
    >
      <Tab.Screen
        name={EXPLORE_TAB}
        component={ExploreStack}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: function TabIcon({ color}) {
            return <ExploreTab color={color}/>
          },
        }}
      />
      <Tab.Screen
        name={CARD_TAB}
        component={CardStack}
        options={{
          tabBarLabel: "Card",
          tabBarIcon: function TabIcon({ color}) {
            return <CardTab color={color}/>
          },
        }}
      />
      <Tab.Screen
        name={HISTORY_TAB}
        component={HistoryStack}
        options={{
          tabBarLabel: "History",
          tabBarIcon: function TabIcon({ color}) {
            return <HistoryTab color={color}/>
          },
        }}
      />
      <Tab.Screen
        name={FAVORITES_TAB}
        component={FavoritesStack}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: function TabIcon({ color }) {
            return <FavoritesTab color={color}/>
          },
        }}
      />
    </Tab.Navigator>
  )
}

export type PrimaryStackParamList = {
  primaryNavigator: undefined
  benefitDetails: undefined
  myAccount: undefined
  category: undefined
  destination: undefined
}
const Stack = createStackNavigator<PrimaryStackParamList>()

export const MainTabsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="primaryNavigator" component={MainTabsNavigator} />
      <Stack.Screen name={BENEFIT_DETAILS_SCREEN} component={BenefitDetails} />
      <Stack.Screen name={MY_ACCOUNT_SCREEN} component={MyAccountScreen} />
      <Stack.Screen name={CATEGORY_SCREEN} component={CategoryScreen} />
      <Stack.Screen name={DESTINATION_SCREEN} component={DestinationScreen} />
    </Stack.Navigator>
  )
}

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
