import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';

export const DestinationsItem = (props) => {
    const {item, onPress, currentId} = props

    const currentDestinationStyle = (id: number) => {
        return {backgroundColor: id === currentId ? color.palette.primary500 : 'transparent'}
    }
    const currentDestinationTextStyle = (id: number) => {
        return {color: id === currentId ? color.palette.white : color.palette.neutral400}
    } 

    return (
        <TouchableOpacity 
            style={[styles.container, currentDestinationStyle(item.id)]} 
            onPress={() => onPress(item.id)}    
        >
            <Text text={item.text} style={[styles.text, currentDestinationTextStyle(item.id)]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: perfectSize(8),
        paddingHorizontal: perfectSize(14),
        paddingVertical: perfectSize(6),
        borderRadius: 100,
    },
    text: {
        color: color.palette.neutral400

    }
})