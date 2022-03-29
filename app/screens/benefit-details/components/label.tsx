import React from 'react';
import { StyleSheet, View } from 'react-native';
import Travel from '../../../../assets/svgs/travel';
import { Text } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';

export const Label = ({text}) => {
    return (
        <View style={styles.categoryContainer}>
            <Travel color={color.palette.white} width={perfectSize(13)} height={perfectSize(10)}/>
            <Text text={text} style={styles.categoryText}/>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        height: perfectSize(25),
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: color.palette.primary500,
        alignSelf: "flex-start",
        paddingHorizontal: perfectSize(10),
        borderRadius: perfectSize(100),
        marginRight: perfectSize(8)
    },
    categoryText: {
        marginLeft: perfectSize(6),
        fontSize: perfectSize(13),
        lineHeight: perfectSize(20),
    },
})