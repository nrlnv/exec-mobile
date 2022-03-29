import React, { useEffect } from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Text } from '../../../components'
import { color } from '../../../theme'
import { perfectSize } from '../../../utils/dimmesion'

export const FilterCategoryItem = (props) => {
    const { item, onCategoryPress, filterCategories } = props

    const marginStyle = (id: number) => {
        return {marginRight: id % 4 === 3 ? 0 : perfectSize(4)}
    }

    const addedCategoryStyle = (id: number) => {
        if (filterCategories.includes(id)) {
            return {borderColor: color.palette.primary500, backgroundColor: color.palette.white}
        }
        return {}
    }

    const onPress = (id: number) => {
        if (filterCategories.includes(id)) {
            const arr = [...filterCategories]
            const index = arr.indexOf(id)
            if (index !== -1) {
                arr.splice(index, 1);
                onCategoryPress(arr)
            }
        } else {
            onCategoryPress([...filterCategories, id])
        }
    }

    return (
        <TouchableOpacity 
            onPress={() => onPress(item.id)}
            style={[styles.container, marginStyle(item.id), addedCategoryStyle(item.id)]}>
            <Image source={item.icon} style={styles.icon} />
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
    icon: {
        width: perfectSize(20),
        height: perfectSize(20)
    }
})