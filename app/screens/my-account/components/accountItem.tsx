import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ARROW_RIGHT_WHITE } from '../../../../assets/images';
import { Text } from '../../../components';
import { useAppDispatch } from '../../../hooks/hooks';
import { EDIT_PROFILE_SCREEN } from '../../../navigators/screen-name-constants';
import { setToken } from '../../../services/redux/slices/authSlice';
import { perfectSize } from '../../../utils/dimmesion';

export const AccountItem = ({item}) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const onPress = () => {
        if (id === 5) {
            dispatch(setToken({}))
        } else if (id === 0) {
            navigation.navigate(EDIT_PROFILE_SCREEN, {item})
        }
    }

    const {text, icon, id} = item
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <View style={styles.flexD}>
                <Image source={icon} style={styles.icon} />
                <Text text={text} style={styles.text} />
            </View>
            {
                id === 5 ? null : (
                    <Image source={ARROW_RIGHT_WHITE} style={styles.icon} />
                )
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.2)',
        marginHorizontal: perfectSize(24),
        paddingVertical: perfectSize(12)
    },
    flexD: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: perfectSize(40),
        height: perfectSize(40),
    },
    text: {
        fontSize: 18,
        lineHeight: 23.4,
        marginLeft: perfectSize(12)
    }
})