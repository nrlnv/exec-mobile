import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { CLOSE } from '../../../../assets/images';
import { Text } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';

export const ModalHeader = (props) => {
    const {onBackdropPress, text} = props
    return (
        <View style={styles.header} >
            <Text text={text} style={styles.sortyByText} />
            <TouchableOpacity onPress={onBackdropPress}>
                <Image source={CLOSE} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
    icon: {
        width: perfectSize(40),
        height: perfectSize(40),
    },
})