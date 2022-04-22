import React from 'react'
import { StyleSheet, TextInput, Pressable } from 'react-native'
import { Text } from '../../../components'
import { color } from '../../../theme'
import { perfectSize } from '../../../utils/dimmesion'

export const AccountInput = (props) => {
    const {title = '', value = '', onPress = () => {}, onChangeText, isText = false, ...rest} = props

    const onPressIn = () => {
        if (title === 'Address' || title === 'About me') {
            onPress()
        }
    }
    
    return (
        <Pressable style={styles.container} onPress={onPress} >
            <Text text={title} style={styles.title} />
            {isText ? (
                <Text text={value} style={styles.value} numberOfLines={1} />
            ) : (
                <TextInput 
                value={value} 
                onChangeText={onChangeText} 
                style={styles.value} 
                {...rest}
                onPressIn={onPressIn}
            />
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: perfectSize(19),
        marginBottom: perfectSize(1),
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    },
    title: {
        lineHeight: 19.5,
        color: color.palette.neutral500,
        minWidth: perfectSize(80)
    },
    value: {
        fontSize: 18,
        lineHeight: 23.4,
        flex: 1,
        color: color.palette.white,
    }
})