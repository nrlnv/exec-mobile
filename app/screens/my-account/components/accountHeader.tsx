import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HISTORY_HEADER } from '../../../../assets/images';
import ArrowLeft from '../../../../assets/svgs/arrow_left';
import { Text, Wallpaper } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';

export const AccountHeader = (props) => {
    const {backText = 'Account', title, icon = ''} = props
    const insets = useSafeAreaInsets()
    const insetStyle = { marginTop: Platform.OS === 'ios' ? insets.top + 10 : StatusBar.currentHeight }
    const navigation = useNavigation()

    return (
        <View>
            <Wallpaper backgroundImage={HISTORY_HEADER} style={[styles.headerImage, {height: 110 + insets.top}]} />
            <TouchableOpacity 
                style={[styles.backButton, insetStyle]} 
                onPress={() => navigation.goBack()} 
                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}    
            >
                <ArrowLeft color={color.palette.neutral500} />
                <Text text={backText} style={styles.backText} />
            </TouchableOpacity>
            <View style={styles.titleView}>
                {icon ? (<Image source={icon} style={styles.icon} />) : null}
                <Text text={title} style={styles.title} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        width: '100%', 
        // height: perfectSize(113)
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: perfectSize(24),
    },
    backText: {
        color: color.palette.neutral500,
        marginLeft: perfectSize(10)
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: perfectSize(24),
        marginTop: perfectSize(17)
    },
    icon: {
        width: perfectSize(23),
        height: perfectSize(40),
    },
    title: {
        fontSize: 26,
        lineHeight: 33.8,
        marginLeft: perfectSize(15)
    }
})