import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { PROFILE } from '../../../../assets/images';
import { Button, Screen } from '../../../components';
import { useAppDispatch } from '../../../hooks/hooks';
import { ABOUT_SCREEN, ADDRESS_SCREEN } from '../../../navigators/screen-name-constants';
import { UPDATE_USER_MUTATION } from '../../../services/api/mutations';
import { selectUser, setUser } from '../../../services/redux/slices/authSlice';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { CopiedModal } from '../../benefit-details/components/copiedModal';
import { AccountHeader } from './accountHeader';
import { AccountInput } from './accountInput';

export const EditProfileScreen = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const user = useSelector(selectUser)
    const {address, about} = user || {}

    const [firstName, setFirstName] = useState(user?.firstName)
    const [lastName, setLastName] = useState(user?.lastName)
    const [email, setEmail] = useState(user?.email)
    const [companyName, setCompanyName] = useState(user?.companyName)
    const [website, setWebsite] = useState(user?.companyWebsite)
    const [position, setPosition] = useState(user?.position)

    const [showCopiedModal, setShowCopiedModal] = useState(false)


    const [updateUserProfile, { loading}] = useMutation(UPDATE_USER_MUTATION, {
        onCompleted: (data) => {
            setShowCopiedModal(true)
            dispatch(setUser(data.updateUser.user))
            setTimeout(() => {
                setShowCopiedModal(false)
                navigation.goBack()
            }, 1000);
        },
      })

    const onSavePress = () => {
        updateUserProfile({
            variables: {
                firstName,
                lastName,
                email,
                companyName,
                companyWebsite: website,
                about: user?.about,
                position,
                country: user?.address?.country,
                state: user?.address?.state,
                city: user?.address?.city,
                address: user?.address?.address,
                zipCode: user?.address?.zipCode,
                apartment: user?.address?.apartment
            }
        })
    }

    return (
        <Screen style={styles.container} preset='scroll' unsafe >
            <AccountHeader title={'Your Profile'} icon={PROFILE} />
            <View style={styles.mainView}>
                <AccountInput title={'First'} value={firstName} onChangeText={setFirstName} />
                <AccountInput title={'Last'} value={lastName} onChangeText={setLastName} />
                <AccountInput title={'Email'} value={email} onChangeText={setEmail} />
                <AccountInput title={'Company'} value={companyName} onChangeText={setCompanyName} />
                <AccountInput title={'Website'} value={website} onChangeText={setWebsite} />
                <AccountInput title={'Position'} value={position} onChangeText={setPosition} />
                <AccountInput title={'Address'} value={`${address.address}, ${address.apartment}, ${address.city}`} editable={false} onPress={() => navigation.navigate(ADDRESS_SCREEN)} />
                <AccountInput title={'About me'} value={about} editable={false} onPress={() => navigation.navigate(ABOUT_SCREEN)} />
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
        marginTop: perfectSize(32),
        paddingHorizontal: perfectSize(24),
        flex: 1,
    },
    button: {
        marginBottom: perfectSize(30),
        marginHorizontal: perfectSize(24)
    }
})