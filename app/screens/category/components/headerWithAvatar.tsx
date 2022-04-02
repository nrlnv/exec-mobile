import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar, Header } from '../../../components';
import { perfectSize } from '../../../utils/dimmesion';

export const HeaderwithAvatar = (props) => {
    const {headerText = ''} = props
    const insets = useSafeAreaInsets()
    const insetStyle = { marginTop: insets.top }
    const navigation = useNavigation()
    return (
        <View style={[styles.headerBack, insetStyle]} >
            <Header leftIcon='back' headerText={headerText} onLeftPress={navigation.goBack} style={{marginLeft: perfectSize(8)}} />
            <View style={styles.avatar}>
                <Avatar />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        position: "absolute",
        right: perfectSize(16),
    },
})