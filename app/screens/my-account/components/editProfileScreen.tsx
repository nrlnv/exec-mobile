import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { HISTORY_HEADER } from '../../../../assets/images';
import { Screen, Text, Wallpaper } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { AccountHeader } from './accountHeader';

export const EditProfileScreen = () => {
    const route = useRoute()
    const {item} = route?.params
    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={item.text} icon={item.icon} />

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.palette.black
    },
    headerImage: {
        width: '100%', 
        height: perfectSize(143)
    }
})