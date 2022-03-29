import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { ARROW_DOWN, ARROW_RIGHT, DETAILS } from '../../../../assets/images';
import { Text } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';

export const DetailsItem = (props) => {
    const {isShow, onItemPress, text, icon} = props
    return (
        <TouchableOpacity 
            onPress={onItemPress}
            style={styles.container}
        >
            <View style={styles.flexD}>
                <Image source={icon} style={[styles.icon, {marginLeft: -perfectSize(10)}]} />
                <Text text={text} style={[styles.detailsText, {color: isShow ? color.palette.primary500 : color.palette.neutral900}]} />
            </View>
            <Image source={isShow ? ARROW_DOWN : ARROW_RIGHT} style={[styles.icon, {marginRight: -perfectSize(12)}]} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    flexD: {
        alignItems: 'center',
        flexDirection: 'row', 
    },
    icon: {
        height: perfectSize(40), 
        width: perfectSize(40)
    },
    detailsText: {
        color: color.palette.black, 
        marginLeft: perfectSize(12)
    }
})