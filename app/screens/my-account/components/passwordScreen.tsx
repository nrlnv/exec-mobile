import React from 'react';
import { StyleSheet } from 'react-native';
import { PASSWORD } from '../../../../assets/images';
import { Screen } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { AccountHeader } from './accountHeader';

export const PasswordScreen = () => {
    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={'Password'} icon={PASSWORD} />

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.palette.black
    },
})