import React from "react"
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native"
import TabsBg from "../../../assets/svgs/tabs_bg"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { color } from "../../theme"
import { perfectSize } from "../../utils/dimmesion"
import { Text } from "../../components"

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  backgroundColor: color.palette.white,
  paddingHorizontal: 20,
}
const BACKGROUND: ViewStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
}
const TAB_CONTAINER: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 10,
}
const TAB_TEXT: TextStyle = {
  color: color.inactiveTabText,
  fontSize: perfectSize(13),
  lineHeight: perfectSize(20),
  marginTop: perfectSize(7),
}
const ACTIVE_TAB_TEXT: TextStyle = {
  color: color.activeTabText,
}

export function MainTabs({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets()
  const insetStyle = { paddingBottom: insets.bottom - 10 }
  const bgStyle = {...BACKGROUND, bottom: insets.bottom - 10 }
  return (
    <View style={[CONTAINER, insetStyle]}>
      <View style={bgStyle}>
        <TabsBg/>
      </View>

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const icon =
          options.tabBarIcon !== undefined
            ? options.tabBarIcon
            : () => <View/>

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={TAB_CONTAINER}
          >
            {icon({color : isFocused ? color.activeTab : color.inactiveTab} )}
            <Text style={[TAB_TEXT, isFocused && ACTIVE_TAB_TEXT]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}