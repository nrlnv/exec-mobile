import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Text } from '../../../components'
import { color } from '../../../theme'
import { perfectSize } from '../../../utils/dimmesion'

export const ColumnInputItem = (props) => {
    const {value, setValue, title, ...rest} = props
    return (
        <View style={styles.container}>
            <Text text={title} style={styles.title} />
            <TextInput
                value={value}
                onChangeText={setValue}
                style={styles.value} 
                {...rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: perfectSize(18),
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    },
    title: {
        lineHeight: 19.5,
        color: color.palette.neutral500,
        marginBottom: perfectSize(12)
    },
    value: {
        fontSize: 18,
        lineHeight: 23.4,
        color: color.palette.white,
    },
})