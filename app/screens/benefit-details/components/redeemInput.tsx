import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
import {color} from '../../../theme'
import { perfectSize } from '../../../utils/dimmesion';

export const RedeemInput = (props) => {
    const {value, onChangeText, placeholder, ...rest} = props
    return (
        <TextInput 
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={color.palette.neutral400}
            style={styles.container}
            {...rest}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.palette.white,
        borderRadius: 4,
        paddingVertical: perfectSize(10),
        paddingHorizontal: perfectSize(12),
        fontSize: 16,
        lineHeight: 20.48,
        color: color.palette.black,
        marginBottom: perfectSize(12)
    }
})