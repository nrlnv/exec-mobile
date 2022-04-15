import React, { useState } from 'react';
import { ActionSheetIOS, ActivityIndicator, Alert, Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import { CopiedModal } from '../../benefit-details/components/copiedModal';

export const ImageScreen = () => {
    const navigation = useNavigation()
    const credentials = useSelector(selectCredentials)
    const user = useSelector(selectUser)
    const {photo = {}, id} = user || {}
    const avatarUrl = BASE_URL + photo.thumbnail

    const [imagePath, setImagePath] = useState('')
    const [mimeType, setMimeType] = useState('')
    const [showCopiedModal, setShowCopiedModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const imagePicker = () => {
      ImagePicker.openPicker({
        width: 1000,
        height: 1200,
        // cropping: true,
        includeBase64: true,
      }).then(image => {
        setImagePath(image.data)
        setMimeType(image.mime)
      })
    }

    const onAddPress = () => {
      if (Platform.OS === 'ios') {
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
                // cropping: true,
                includeBase64: true,
                mediaType: 'photo',
              }).then(image => {
                setImagePath(image.data)
                setMimeType(image.mime)
              })
            } else if (buttonIndex === 2) {
              imagePicker()
            }
          },
        )}
        else {
          imagePicker()
        }
      }

    const onSavePress = async () => {
      setLoading(true)
        const data = {
          photo: imagePath,
          mime: mimeType
        }
        try {
          await axios.post(`${BASE_URL}/api/panel/members/${id}/upload_photo_mobile`, data, {
            headers: {
              'access-token': credentials.accessToken,
              client: credentials.client,
              uid: credentials.uid,
            },
          })
          setShowCopiedModal(true)
          setTimeout(() => {
              setShowCopiedModal(false)
              navigation.goBack()
          }, 1000);
        } catch (error) {
          Alert.alert(error.message)
        }
      setLoading(false)

    }

    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={'Profile image'} />
            <View style={styles.mainView}>
                <TouchableOpacity onPress={onAddPress}>
                    <FastImage source={{uri: imagePath ? `data:${mimeType};base64,${imagePath}` : avatarUrl}} style={styles.image} />
                    <View style={styles.editIcon}>
                        <Edit width={20} height={20}/>
                    </View>
                </TouchableOpacity>
                <ActivityIndicator color={color.palette.primary500} animating={loading} style={styles.activityIndicator} />
            </View>
            <Button text={'Save'} style={styles.button} onPress={onSavePress} disabled={loading} />
            <CopiedModal isVisible={showCopiedModal} title={'Saved!'} />
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
    },
    activityIndicator: {
      marginTop: perfectSize(20)
    }
})