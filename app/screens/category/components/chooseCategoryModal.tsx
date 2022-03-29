import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import Modal from 'react-native-modal'
import { CLOSE, FILTER_MODAL } from '../../../../assets/images'
import { Text, Wallpaper } from '../../../components'
import { color } from '../../../theme'
import { filterCategoryConst } from '../../../utils/constants'
import { perfectSize } from '../../../utils/dimmesion'
import { ChoosCategoryItem } from './chooseCategoryItem'

export const ChooseCategoryModal = (props) => {
    const {isVisible, onBackdropPress, onChangeCategory} = props

    const categoryRenderItem = ({item}) => {
        return (
            <ChoosCategoryItem item={item} onChangeCategory={onChangeCategory} />
        )
    }

    return (
        <Modal isVisible={isVisible} onBackdropPress={onBackdropPress} >
            <View style={styles.container}>
                <Wallpaper backgroundImage={FILTER_MODAL} />
                <View style={styles.header} >
                    <Text text={'Choose Category'} style={styles.title} />
                    <TouchableOpacity onPress={onBackdropPress}>
                        <Image source={CLOSE} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <FlatList 
                    data={filterCategoryConst}
                    keyExtractor={item => item.id}
                    renderItem={categoryRenderItem}
                    numColumns={4}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1,
        position: 'absolute',
        left: -20,
        right: -20,
        bottom: -20,
        // height: perfectSize(600),
        paddingHorizontal: perfectSize(24),
        paddingVertical: perfectSize(35)
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: perfectSize(28)
    },
    title: {
        fontSize: perfectSize(20),
        lineHeight: perfectSize(26),
        color: color.palette.neutral900
    },
    icon: {
        width: perfectSize(40),
        height: perfectSize(40),
    }
})