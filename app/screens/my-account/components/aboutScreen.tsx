import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import { PASSWORD } from '../../../../assets/images';
import { Button, Screen, Text } from '../../../components';
import { useAppDispatch } from '../../../hooks/hooks';
import { selectUser, setUser } from '../../../services/redux/slices/authSlice';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { AccountHeader } from './accountHeader';

export const AboutScreen = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const user = useSelector(selectUser)
    const {about, ...rest} = user || {}
    const [value, setValue] = useState(about)

    const onSavePress = () => {
        dispatch(setUser({...rest, about: value}))
        navigation.goBack()
    }

    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={'About me'} backText={'Your Profile'} />
            <View style={styles.mainView}>
                <Text text={'Bio'} style={styles.title} />
                <TextInput
                    value={value}
                    onChangeText={setValue}
                    multiline
                    style={styles.value} 
                />
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
        marginTop: perfectSize(48),
        paddingHorizontal: perfectSize(24),
        flex: 1,
    },
    title: {
        lineHeight: 19.5,
        color: color.palette.neutral500,
        marginBottom: perfectSize(12)
    },
    value: {
        fontSize: 18,
        lineHeight: 23.4,
        flex: 1,
        color: color.palette.white,
    },
    button: {
        marginBottom: perfectSize(30),
        marginHorizontal: perfectSize(24)
    }
})