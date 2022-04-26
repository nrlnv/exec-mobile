import React, { useState } from 'react';
import { ActionSheetIOS, ActivityIndicator, Alert, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import Edit from '../../../../assets/svgs/edit';
import { Button, Screen } from '../../../components';
import { BASE_URL } from '../../../services/api';
import { selectCredentials, selectUser, setUser } from '../../../services/redux/slices/authSlice';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { AccountHeader } from './accountHeader';
import ImagePicker from 'react-native-image-crop-picker'
import axios from 'axios'
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { CopiedModal } from '../../benefit-details/components/copiedModal';
import { ImagePickerModal } from './imagePickerModal';
import { USER_IMAGE } from '../../../../assets/images';
import { useLazyQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../../services/api/queries';
import { useAppDispatch } from '../../../hooks/hooks';

export const ImageScreen = () => {
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const credentials = useSelector(selectCredentials)
    const user = useSelector(selectUser)
    const {photo = {}, id} = user || {}
    const avatarUrl = photo.thumbnail ? {uri: BASE_URL + photo.thumbnail} : USER_IMAGE 

    const [imagePath, setImagePath] = useState('')
    const [mimeType, setMimeType] = useState('')
    const [showCopiedModal, setShowCopiedModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [showImagePickerModal, setShowImagePickerModal] = useState(false)

    const [getCurrentUser, { data: userData }] = useLazyQuery(GET_CURRENT_USER)


    const openPicker = () => {
      ImagePicker.openPicker({
        width: 800,
        height: 1000,
        includeBase64: true,
        mediaType: 'photo',
      }).then(image => {
        setImagePath(image.data)
        setMimeType(image.mime)
      })
    }

    const openCamera = () => {
      ImagePicker.openCamera({
        width: 800,
        height: 1000,
        includeBase64: true,
        mediaType: 'photo',
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
              openCamera()
            } else if (buttonIndex === 2) {
              openPicker()
            }
          },
        )}
        else {
          setShowImagePickerModal(true)
        }
      }

    const onSavePress = async () => {
      // setLoading(true)
        const data = {
          photo: imagePath,
          mime: mimeType
        }
        navigation.goBack()
        try {
          await axios.post(`${BASE_URL}/api/panel/members/${id}/upload_photo_mobile`, data, {
            headers: {
              'access-token': credentials.accessToken,
              client: credentials.client,
              uid: credentials.uid,
            },
          })
          try {
            await getCurrentUser()
            if (userData) {
              dispatch(setUser(userData?.currentUser))
            }
          } 
          catch (error) {
            console.log(error);
          }
          // setShowCopiedModal(true)
          // setTimeout(() => {
          //     setShowCopiedModal(false)
          //     navigation.goBack()
          // }, 1000);
        } catch (error) {
          Alert.alert(error.message)
        }
      // setLoading(false)
    }

    const source = imagePath ? {uri: `data:${mimeType};base64,${imagePath}`, priority: FastImage.priority.normal} : avatarUrl

    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={'Profile image'} />
            <View style={styles.mainView}>
                <TouchableOpacity onPress={onAddPress}>
                    <FastImage source={source} style={styles.image} />
                    <View style={styles.editIcon}>
                        <Edit width={20} height={20}/>
                    </View>
                </TouchableOpacity>
                <ActivityIndicator color={color.palette.primary500} animating={loading} style={styles.activityIndicator} />
            </View>
            <Button text={'Save'} style={styles.button} onPress={onSavePress} disabled={loading} />
            <CopiedModal isVisible={showCopiedModal} title={'Saved!'} />
            <ImagePickerModal 
              isVisible={showImagePickerModal} 
              onBackdropPress={() => setShowImagePickerModal(prevState => !prevState)}
              openCamera={openCamera}
              openPicker={openPicker} 
            />
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