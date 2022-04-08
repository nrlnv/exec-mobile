import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SUB_ACCOUNT } from '../../../../assets/images';
import { Button, Screen, Text } from '../../../components';
import { ADD_SUB_ACCOUNTS_SCREEN } from '../../../navigators/screen-name-constants';
import { selectUser } from '../../../services/redux/slices/authSlice';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { AccountHeader } from './accountHeader';
import { SubAccountItem } from './subAccountItem';

export const SubAccountsScreen = () => {
    const navigation = useNavigation()
    const user = useSelector(selectUser)
    const {maxSubAccountCount, subAccountCount, subAccounts} = user || {}
    const remaining = maxSubAccountCount - subAccountCount
    const footerText = remaining === 1 ? `${remaining} sub-account remaining` : `${remaining} sub-accounts remaining`
    return (
        <Screen style={styles.container} unsafe >
            <AccountHeader title={'Sub-Accounts'} icon={SUB_ACCOUNT} />
            <View style={styles.mainView}>
                {subAccounts.map(account => (
                    <SubAccountItem key={account.id} image={account.photo} firstName={account.firstName} lastName={account.lastName} email={account.email}/>
                ))}
            </View>
            <Text 
                text={footerText} 
                style={styles.footerText}    
            />
            <Button text={'+  Add new'} style={styles.button} onPress={() => navigation.navigate(ADD_SUB_ACCOUNTS_SCREEN)} disabled={remaining < 1} />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.palette.black,
        marginBottom: perfectSize(1)
    },
    mainView: {
        marginTop: perfectSize(48),
        // paddingHorizontal: perfectSize(24),
        flex: 1,
    },
    footerText: {
        fontSize: 13,
        alignSelf: 'center',
        marginBottom: perfectSize(20)
    },
    button: {
        marginBottom: perfectSize(30),
        marginHorizontal: perfectSize(24)
    }
})