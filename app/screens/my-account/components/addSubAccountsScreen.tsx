import { useLazyQuery, useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { INVITE, PASSWORD } from '../../../../assets/images';
import { Button, Screen } from '../../../components';
import { useAppDispatch } from '../../../hooks/hooks';
import { ADD_SUBACCOUNT_MUTATION } from '../../../services/api/mutations';
import { GET_CURRENT_USER } from '../../../services/api/queries';
import { setUser } from '../../../services/redux/slices/authSlice';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { AccountHeader } from './accountHeader';
import { AccountInput } from './accountInput';

export const AddSubAccountsScreen = () => {
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [error, setError] = useState('')

    const [addSubAccount, { loading }] = useMutation(ADD_SUBACCOUNT_MUTATION)
    const [getCurrentUser, { data: userData }] = useLazyQuery(GET_CURRENT_USER)


    const onSendPress = async () => {
        try {
            const response = await addSubAccount({
                variables: {
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                    email
                },
            })
            if (response?.data?.addSubAccount?.errors) {
                setError(response.data.addSubAccount.errors.join(' '))
                Alert.alert(error)
              } else {
                onAddSuccess()
              }
        } catch (e) {
            Alert.alert(e.message);
        }
    }

    const onAddSuccess = async () => {
        try {
            await getCurrentUser()
            if (userData) {
                dispatch(setUser(userData?.currentUser))
            }
        } catch (error) {
            console.log(error);
        }
        navigation.goBack();
    }

    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={'Add Sub-Accounts'} icon={INVITE} />
            <View style={styles.mainView}>
                <AccountInput title={'First'} value={firstName} onChangeText={setFirstName} autoFocus />
                <AccountInput title={'Last'} value={lastName} onChangeText={setLastName} />
                <AccountInput title={'Email'} value={email} onChangeText={setEmail} autoCapitalize='none' />
            </View>
            <Button text={'send invitation to exec'} style={styles.button} onPress={onSendPress} />

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