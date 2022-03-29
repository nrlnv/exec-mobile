import React from 'react';         
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';

export const SquareButton = ({icon, filled = false, onPress}) => {

    const filledStyle = {backgroundColor: filled ? color.palette.primary500 : 'transparent'}

    return (
        <TouchableOpacity style={[styles.container, filledStyle]} onPress={onPress} >
            <Image source={icon} style={styles.icon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: perfectSize(48),
        height: perfectSize(48),
        borderRadius: 5,
        borderWidth: 2,
        borderColor: color.palette.primary500,
        marginLeft: perfectSize(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: perfectSize(13),
        height: perfectSize(13)
    }
})