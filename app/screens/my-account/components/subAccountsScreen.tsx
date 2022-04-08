import React from 'react';
import { StyleSheet } from 'react-native';
import { SUB_ACCOUNT } from '../../../../assets/images';
import { Screen } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { AccountHeader } from './accountHeader';

export const SubAccountsScreen = () => {
    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={'Sub-Accounts'} icon={SUB_ACCOUNT} />

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.palette.black
    },
})