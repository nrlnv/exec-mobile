import Clipboard from '@react-native-clipboard/clipboard';
import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { CHECK_MARK_BIG } from '../../../../assets/images';
import { Text } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';

export const CopiedModal = ({isVisible, text = '', title}) => {

    const copyToClipboard = () => {
        if (text) {
            Clipboard.setString(text)
        }
    }

    return (
        <Modal 
            isVisible={isVisible} 
            animationIn='zoomIn' 
            animationOut='zoomOut' 
            onModalWillShow={copyToClipboard}
        >
            <View style={styles.container}>
                <Image source={CHECK_MARK_BIG} style={styles.icon} />
                <Text style={styles.text} text={title} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        width: perfectSize(240),
        height: perfectSize(215),
        backgroundColor: color.palette.white,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    icon: {
        width: perfectSize(52),
        height: perfectSize(52),
        marginBottom: perfectSize(12)
    },
    text: {
        fontSize: 26,
        lineHeight: 33,
        color: color.palette.black
    }
})