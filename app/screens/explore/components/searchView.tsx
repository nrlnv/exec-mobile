import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Search from '../../../../assets/svgs/search';
import { Text } from '../../../components';
import { SEARCH_SCREEN } from '../../../navigators/screen-name-constants';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';

export const SearchView = (props) => {
    const {text} = props
    const navigation = useNavigation()
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate(SEARCH_SCREEN)}>
            <Search/>
            <Text style={styles.text} text={text}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: color.palette.white,
        height: perfectSize(64),
        borderRadius: perfectSize(32),
        marginHorizontal: perfectSize(24),
        paddingHorizontal: perfectSize(24),
        top: -perfectSize(32)
    },
    text: {
        color: color.palette.neutral400,
        fontSize: perfectSize(18),
        lineHeight: perfectSize(24),
        marginLeft: perfectSize(16),
    }
})