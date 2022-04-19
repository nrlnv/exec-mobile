import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Text } from '../../../components'
import { color } from '../../../theme'
import { perfectSize } from '../../../utils/dimmesion'

export const ChoosCategoryItem = (props) => {
    const { item, onChangeCategory } = props

    const marginStyle = (id: number) => {
        return {marginRight: id % 3 === 2 ? 0 : perfectSize(4)}
    }

    const onPress = () => {
        if (item.text === 'View All') {
            onChangeCategory('All Benefits')
        } else {
            onChangeCategory(item.text)
        }
    }

    return (
        <TouchableOpacity 
            onPress={onPress}
            style={[styles.container, marginStyle(item.id)]}>
            {/* <Image source={item.icon} style={styles.icon} /> */}
            {item.icon}
            <Text text={item.text} style={styles.categoryText} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.palette.neutral100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: perfectSize(14),
        paddingTop: perfectSize(20),
        marginBottom: perfectSize(4),
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    categoryText: {
        color: color.palette.neutral400,
        fontSize: 13,
        lineHeight: 19.5,
        marginTop: perfectSize(16)
    },
})