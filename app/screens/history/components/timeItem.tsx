import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from '../../../components'
import { color } from '../../../theme'
import { perfectSize } from '../../../utils/dimmesion'

export const TimeItem = (props) => {
    const {item, time, onPress} = props
    const currentTimeStyle = {backgroundColor: item.id === time ? color.palette.primary500 : 'transparent'}
    return (
        <TouchableOpacity style={[styles.container, currentTimeStyle]} onPress={() => onPress(item.id)} >
            <Text text={item.text} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: perfectSize(14),
        paddingVertical: perfectSize(6),
        borderRadius: 100,
    }
})