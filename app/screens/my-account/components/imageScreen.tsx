import React, { useState } from 'react';
import { ActionSheetIOS, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import Edit from '../../../../assets/svgs/edit';
import { Button, Screen } from '../../../components';
import { BASE_URL } from '../../../services/api';
import { selectCredentials, selectUser } from '../../../services/redux/slices/authSlice';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { AccountHeader } from './accountHeader';
import ImagePicker, { Image as ImageProps } from 'react-native-image-crop-picker'
import axios from 'axios'
import FastImage from 'react-native-fast-image';

export const ImageScreen = () => {
    const credentials = useSelector(selectCredentials)
    const user = useSelector(selectUser)
    const {photo = {}, id} = user || {}
    const avatarUrl = BASE_URL + photo.thumbnail

    const [image, setImage] = useState<ImageProps>()

    const onAddPress = () => {
        ActionSheetIOS.showActionSheetWithOptions(
          {
            options: ['Cancel', 'Camera', 'Photo Library'],
            cancelButtonIndex: 0,
            userInterfaceStyle: 'light',
          },
          buttonIndex => {
            if (buttonIndex === 0) {
              // cancel action
            } else if (buttonIndex === 1) {
              ImagePicker.openCamera({
                width: 1000,
                height: 1200,
                cropping: true,
                mediaType: 'photo',
              }).then(image => {
                setImage(image)
              })
            } else if (buttonIndex === 2) {
              ImagePicker.openPicker({
                width: 1000,
                height: 1200,
                cropping: true,
              }).then(image => {
                setImage(image)
              })
            }
          },
        )
      }

    const onSavePress = async () => {
        const formData = new FormData()
        formData.append('photo', image.path)
        formData.append('width', String(image.cropRect.width))
        formData.append('height', String(image.cropRect.height))
        formData.append('top', String(image.cropRect.y))
        formData.append('left', String(image.cropRect.x))
        
        await axios.post(`${BASE_URL}/api/panel/members/${id}/upload_photo`, formData, {
          headers: {
            'access-token': credentials.accessToken,
            client: credentials.client,
            uid: credentials.uid,
          },
        })
    }

    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={'Profile image'} />
            <View style={styles.mainView}>
                <TouchableOpacity onPress={onAddPress}>
                    <FastImage source={{uri: avatarUrl, priority: FastImage.priority.normal}} style={styles.image} />
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