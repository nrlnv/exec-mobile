import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { INVITE, PASSWORD } from '../../../../assets/images';
import { Button, Screen, Text } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { CopiedModal } from '../../benefit-details/components/copiedModal';
import { AccountHeader } from './accountHeader';
import { AccountInput } from './accountInput';
import { INVITE_MUTATION } from '../../../services/api/mutations';


export const InviteScreen = () => {
    const navigation = useNavigation()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [showCopiedModal, setShowCopiedModal] = useState(false)

    const [invite, { loading }] = useMutation(INVITE_MUTATION)

    const isDisabled = firstName && lastName && email && !loading

    const onSendPress = async () => {
        try {
            await invite({
                variables: {
                    input: {
                        firstName,
                        lastName,
                        email
                    }
                }
            })
            setShowCopiedModal(true)
            setTimeout(() => {
                setShowCopiedModal(false)
                navigation.goBack()
            }, 1000);
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    return (
        // <Screen style={styles.container} preset="scroll" unsafe >
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            // keyboardVerticalOffset={40}
            style={styles.container}
        >
            <ScrollView style={{flex: 1}} >
                <AccountHeader title={'Invite to Exec'} icon={INVITE} />
                <View style={styles.mainView}>
                    <Text 
                        style={styles.text}
                        text={'You have the privilege to invite others that you feel would be a fit for EXEC and fast-track their Membership application.\nPlease use the form below to invite others you think would enjoy EXEC:'} 
                    />
                    <AccountInput title={'First'} value={firstName} onChangeText={setFirstName} autoFocus />
                    <AccountInput title={'Last'} value={lastName} onChangeText={setLastName} />
                    <AccountInput title={'Email'} value={email} onChangeText={setEmail} autoCapitalize='none' />
                </View>
            </ScrollView>

            <Button text={'send invitation to exec'} style={styles.button} onPress={onSendPress} disabled={!isDisabled} />
            <CopiedModal isVisible={showCopiedModal} title={'Sent!'} />
        </KeyboardAvoidingView>
        // </Screen>
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
        marginHorizontal: perfectSize(24),
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: perfectSize(20)
    }
})