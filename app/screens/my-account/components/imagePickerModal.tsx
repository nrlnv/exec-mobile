import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { Text } from '../../../components'
import { color } from '../../../theme'
import { perfectSize } from '../../../utils/dimmesion'

export const ImagePickerModal = (props) => {
    const {isVisible, onBackdropPress, openCamera, openPicker} = props
    const borderBottom = {borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.1)'}
    return (
        <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
            <View style={styles.container}>
                <View style={styles.main}>
                    <TouchableOpacity style={[styles.button, borderBottom]} onPress={() => {
                        openCamera()
                        onBackdropPress()
                    }} >
                        <Text text={'Camera'} style={styles.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        openPicker()
                        onBackdropPress()
                    }} >
                        <Text text={'Photo Library'} style={styles.text} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={onBackdropPress} >
                    <Text text={'Cancel'} style={styles.text} />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.palette.black,
        flex: 1,
        position: 'absolute',
        left: -20,
        right: -20,
        bottom: -20,
        paddingHorizontal: perfectSize(24),
        paddingVertical: perfectSize(35),
    },
    main: {
        borderRadius: 5,
        backgroundColor: color.palette.white,
        width: '100%',
        marginBottom: perfectSize(10)
    },
    button: {
        borderRadius: 5,
        width: '100%',
        paddingVertical: perfectSize(10),
        backgroundColor: color.palette.white,

    },
    text: {
        color: 'blue',
        alignSelf: 'center',
        fontSize: 18,
    }
})