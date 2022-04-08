import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Button, Screen } from '../../../components';
import { useAppDispatch } from '../../../hooks/hooks';
import { selectUser, setUser } from '../../../services/redux/slices/authSlice';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { AccountHeader } from './accountHeader';
import { ColumnInputItem } from './columnInputItem';

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
                <ColumnInputItem title={'Bio'} value={value} setValue={setValue} multiline />
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
    button: {
        marginBottom: perfectSize(30),
        marginHorizontal: perfectSize(24)
    }
})