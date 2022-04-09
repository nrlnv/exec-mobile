import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PASSWORD } from '../../../../assets/images';
import { Button, Screen } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { CopiedModal } from '../../benefit-details/components/copiedModal';
import { AccountHeader } from './accountHeader';
import { ColumnInputItem } from './columnInputItem';

export const PasswordScreen = () => {
    const navigation = useNavigation()
    const [curPassword, setCurPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [showCopiedModal, setShowCopiedModal] = useState(false)
    const isDisabled = curPassword && newPassword && confirmPassword

    const onSavePress = () => {
        setShowCopiedModal(true)
        setTimeout(() => {
            setShowCopiedModal(false)
            navigation.goBack()
        }, 1000);
    }

    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={'Password'} icon={PASSWORD} />
            <View style={styles.mainView}>
                <ColumnInputItem title={'Enter your current password'} value={curPassword} setValue={setCurPassword} secureTextEntry />
                <ColumnInputItem title={'New password'} value={newPassword} setValue={setNewPassword} secureTextEntry />
                <ColumnInputItem title={'Confirm new password'} value={confirmPassword} setValue={setConfirmPassword} secureTextEntry />
            </View>
            <Button text={'Save New Password'} style={styles.button} onPress={onSavePress} disabled={!isDisabled} />
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
    },
})