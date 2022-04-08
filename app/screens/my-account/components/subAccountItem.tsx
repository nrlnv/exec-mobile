import { useLazyQuery, useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Swipeable } from 'react-native-gesture-handler';
import { REMOVE } from '../../../../assets/images';
import { Text } from '../../../components';
import { useAppDispatch } from '../../../hooks/hooks';
import { BASE_URL } from '../../../services/api';
import { REMOVE_SUBACCOUNT_MUTATION } from '../../../services/api/mutations';
import { GET_CURRENT_USER } from '../../../services/api/queries';
import { setUser } from '../../../services/redux/slices/authSlice';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';

export const SubAccountItem = (props) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const {image, firstName, lastName, email} = props

    const avatarUrl = BASE_URL + image.thumbnail

    const renderRightActions = () => {
        return (
          <TouchableOpacity style={styles.deleteView} onPress={onRemovePress} >
                <Image source={REMOVE} style={styles.icon} />
                <Text text={'Remove'} style={styles.removeText} />
          </TouchableOpacity>
        );
    };

    const [delSubAccount, { loading, error }] = useMutation(REMOVE_SUBACCOUNT_MUTATION)
    const [getCurrentUser, { data: userData }] = useLazyQuery(GET_CURRENT_USER)


    const onRemovePress = async () => {
        try {
            await delSubAccount({
                variables: {
                    email
                }
            })
            onRemoveSuccess()
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    const onRemoveSuccess = async () => {
        try {
            await getCurrentUser()
            if (userData) {
                dispatch(setUser(userData?.currentUser))
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View style={styles.container}>
                <FastImage source={{uri: avatarUrl, priority: FastImage.priority.normal}} style={styles.avatar}/>
                <View style={styles.userInfo}>
                    <Text text={`${firstName} ${lastName}`} style={styles.name} />
                    <Text text={email} style={styles.email} />
                </View>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.2)',
        paddingVertical: perfectSize(16),
        marginHorizontal: perfectSize(24)
    },
    avatar: {
        width: perfectSize(40),
        height: perfectSize(40),
        borderRadius: perfectSize(20),
        borderWidth: 2,
        borderColor: color.palette.white
    },
    userInfo: {
        marginLeft: perfectSize(16)
    },
    name: {
        fontSize: 20,
        lineHeight: 26,
        color: color.palette.white,
        marginBottom: perfectSize(4)
    },
    email: {
        color: color.palette.neutral500,
    },
    deleteView: {
        backgroundColor: color.palette.error500,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: perfectSize(17),
        borderRadius: perfectSize(5),
        alignSelf: 'flex-end',
        paddingVertical: perfectSize(10),
        marginRight: perfectSize(24)
    },
    removeText: {
        marginTop: perfectSize(5)
    },
    icon: {
        width: perfectSize(21),
        height: perfectSize(21),
    },
})