import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal'
import { FILTER_MODAL } from '../../../../assets/images';
import { Button, Text, Wallpaper } from '../../../components';
import { color } from '../../../theme';
import { filterCategoryConst, sort1const, sort2const } from '../../../utils/constants';
import { perfectSize } from '../../../utils/dimmesion';
import { FilterCategoryItem } from './filterCategoryItem';
import { ModalHeader } from './modalHeader';

export const FilterModal = (props) => {
    const {
        isVisible, onBackdropPress, onSort1Press, 
        sort1, onSort2Press, 
        sort2, filterCategories, onCategoryPress} = props
    const currentItemStyle = (id: number, sort: number) => {
        return {backgroundColor: id === sort ? color.palette.primary500 : 'transparent'}
    }

    const currentItemText = (id: number, sort: number) => {
        return {color: id === sort ? color.palette.white : color.palette.neutral700}
    }

    const categoryRenderItem = ({item}) => {
        return (
            <FilterCategoryItem item={item} filterCategories={filterCategories} onCategoryPress={onCategoryPress} />
        )
    }

    const onApplyPress = () => {
        onBackdropPress()
    }

    return (
        <Modal isVisible={isVisible} onBackdropPress={onBackdropPress} >
            <View style={styles.container}>
                <Wallpaper backgroundImage={FILTER_MODAL} />
                <ModalHeader text={'Sort By'} onBackdropPress={onBackdropPress} />
                <View style={styles.sortView}>
                    {
                        sort1const.map(s => (
                            <TouchableOpacity key={s.id} style={[styles.sortItem, s.style, currentItemStyle(s.id, sort1)]} onPress={() => onSort1Press(s.id)} >
                                <Text text={s.text} style={[styles.sortText, currentItemText(s.id, sort1)]} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={styles.sortView}>
                    {
                        sort2const.map(s => (
                            <TouchableOpacity key={s.id} style={[styles.sortItem, s.style, currentItemStyle(s.id, sort2)]} onPress={() => onSort2Press(s.id)} >
                                <Text text={s.text} style={[styles.sortText, currentItemText(s.id, sort2)]} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={styles.line} />
                <View style={styles.header} >
                    <Text text={'Filter by Category'} style={styles.sortyByText} />
                </View>
                <FlatList 
                    data={filterCategoryConst}
                    keyExtractor={item => item.id}
                    renderItem={categoryRenderItem}
                    numColumns={4}
                />
                <Button text={'APPLY'} style={styles.button} onPress={onApplyPress} />
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
    sortyByText: {
        fontSize: perfectSize(20),
        lineHeight: perfectSize(26),
        color: color.palette.neutral900
    },
    sortView: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: color.palette.neutral300,
        marginBottom: perfectSize(21),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sortText: {
        fontSize: 13,
        lineHeight: 13,
        letterSpacing: 0.05,
        color: color.palette.neutral700
    },
    sortItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'transparent',
        height: perfectSize(37),
    },
    line: {
        height: perfectSize(1),
        backgroundColor: color.palette.neutral300,
        width: '100%',
        marginTop: perfectSize(7),
        marginBottom: perfectSize(30)
    },
    button: {
        marginTop: perfectSize(30)
    }
})