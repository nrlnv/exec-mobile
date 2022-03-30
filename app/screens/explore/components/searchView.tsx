import React from 'react';
import { StyleSheet, View } from 'react-native';
import Search from '../../../../assets/svgs/search';
import { Text } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';

export const SearchView = (props) => {
    const {text} = props
    return (
        <View style={styles.container}>
            <Search/>
            <Text style={styles.text} text={text}/>
        </View>
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