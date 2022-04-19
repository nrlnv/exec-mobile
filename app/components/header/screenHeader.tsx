import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar, Text, Wallpaper } from '..';
import { HISTORY_HEADER } from '../../../assets/images';
import { perfectSize } from '../../utils/dimmesion';

export const ScreenHeader = (props) => {
    const {title} = props
    const insets = useSafeAreaInsets()
    const insetStyle = { marginTop: Platform.OS === 'ios' ? insets.top : StatusBar.currentHeight }

    return (
        <View style={styles.header}>
            <Wallpaper backgroundImage={HISTORY_HEADER} style={styles.headerImage} />
            <Text style={[styles.headerTitle, insetStyle]} text={title} />
            <View style={[styles.avatar, insetStyle]}>
                <Avatar />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row", 
        justifyContent: 'space-between', 
        height: perfectSize(114),
      },
      headerImage: {
        width: '100%', 
        height: perfectSize(114)
      },
      headerTitle: {
        fontSize: perfectSize(32),
        lineHeight: perfectSize(42),
        marginLeft: perfectSize(24),
      },
      avatar: {
        position: "absolute",
        right: perfectSize(16),
      },
})