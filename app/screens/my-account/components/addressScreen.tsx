import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { PASSWORD } from '../../../../assets/images';
import { Button, Screen } from '../../../components';
import { useAppDispatch } from '../../../hooks/hooks';
import { selectUser, setUser } from '../../../services/redux/slices/authSlice';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { AccountHeader } from './accountHeader';
import { AccountInput } from './accountInput';

export const AddressScreen = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const user = useSelector(selectUser)
    const {address, ...rest} = user || {}

    const [street, setStreet] = useState(address.address)
    const [apartment, setApartment] = useState(address.apartment)
    const [city, setCity] = useState(address.city)
    const [state, setState] = useState(address.state)
    const [zipCode, setZipCode] = useState(address.zipCode)
    const [country, setCountry] = useState(address.country)

    const newAddress = {
        address: street,
        city,
        state,
        zipCode,
        country,
        apartment,
    }

    const onSavePress = () => {
        dispatch(setUser({...rest, address: newAddress}))
        navigation.goBack()
    }

    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={'Address'} backText={'Your Profile'} />
            <View style={styles.mainView}>
                <AccountInput title={'Street 1'} value={street} onChangeText={setStreet} />
                <AccountInput title={'Street 2'} editable={false} />
                <AccountInput title={'City'} value={city} onChangeText={setCity} />
                <AccountInput title={'State'} value={state} onChangeText={setState} />
                <AccountInput title={'Zip Code'} value={zipCode} onChangeText={setZipCode} />
                <AccountInput title={'Country'} value={country} onChangeText={setCountry} />
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
        marginTop: perfectSize(32),
        paddingHorizontal: perfectSize(24),
        flex: 1,
    },
    button: {
        marginBottom: perfectSize(30),
        marginHorizontal: perfectSize(24)
    }
})