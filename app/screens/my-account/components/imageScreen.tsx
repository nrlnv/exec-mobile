import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { PASSWORD } from '../../../../assets/images';
import Edit from '../../../../assets/svgs/edit';
import { Button, Screen, Text } from '../../../components';
import { BASE_URL } from '../../../services/api';
import { selectUser } from '../../../services/redux/slices/authSlice';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { AccountHeader } from './accountHeader';

export const ImageScreen = () => {

    const user = useSelector(selectUser)

    const {photo = {}} = user || {}

    const avatarUrl = BASE_URL + photo.thumbnail

    const onSavePress = () => {}

    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={'Image'} />
            <View style={styles.mainView}>
                <TouchableOpacity>
                    <Image source={{uri: avatarUrl}} style={styles.image} />
                    <View style={styles.editIcon}>
                        <Edit width={20} height={20}/>
                    </View>
                </TouchableOpacity>
            </View>
            <Button text={'Save'} style={styles.button} onPress={onSavePress} />

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.palette.black
    },
    mainView: {
        marginTop: perfectSize(98),
        paddingHorizontal: perfectSize(24),
        alignItems: 'center',
        flex: 1,
    },
    image: {
        width: perfectSize(164),
        height: perfectSize(164),
        // marginLeft: perfectSize(27),
        borderRadius: perfectSize(82),
        borderWidth: 2,
        borderColor: color.palette.white
    },
    editIcon: {
        position: 'absolute', 
        right: 0, 
        bottom: 0, 
        backgroundColor: color.palette.black,
        width: perfectSize(40),
        height: perfectSize(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: perfectSize(20),
        borderWidth: 2,
        borderColor: color.palette.white
    },
    button: {
        marginBottom: perfectSize(30),
        marginHorizontal: perfectSize(24)
    }
})