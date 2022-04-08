import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { INVITE, PASSWORD } from '../../../../assets/images';
import { Button, Screen, Text } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { AccountHeader } from './accountHeader';
import { AccountInput } from './accountInput';

export const InviteScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const isDisabled = firstName && lastName && email

    const onSendPress = () => {}

    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={'Invite to Exec'} icon={INVITE} />
            <View style={styles.mainView}>
                <Text 
                    style={styles.text}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis viverra consequat. Nam quis nunc est. Nullam dictum quis velit id tincidunt.'} 
                />
                <AccountInput title={'First'} value={firstName} onChangeText={setFirstName} autoFocus />
                <AccountInput title={'Last'} value={lastName} onChangeText={setLastName} />
                <AccountInput title={'Email'} value={email} onChangeText={setEmail} autoCapitalize='none' />
            </View>
            <Button text={'send invitation to exec'} style={styles.button} onPress={onSendPress} disabled={!isDisabled} />
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
    text: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: perfectSize(20)
    }
})