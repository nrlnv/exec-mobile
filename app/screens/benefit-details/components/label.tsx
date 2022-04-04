import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Business from '../../../../assets/svgs/business';
import Experiences from '../../../../assets/svgs/experiences';
import Hotel from '../../../../assets/svgs/hotel';
import Lifestyle from '../../../../assets/svgs/lifestyle';
import Marker from '../../../../assets/svgs/marker';
import Travel from '../../../../assets/svgs/travel';
import { Text } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';

const iconHandler = (category) => {
    switch (category) {
        case 'Hotels':
            return <Hotel color={color.palette.white} width={perfectSize(13)} height={perfectSize(10)}/>
        case 'Lifestyle':
            return <Lifestyle color={color.palette.white} width={perfectSize(13)} height={perfectSize(10)}/>
        case 'Travel':
            return <Travel color={color.palette.white} width={perfectSize(13)} height={perfectSize(10)}/>
        case 'Experiences':
            return <Experiences color={color.palette.white} width={perfectSize(13)} height={perfectSize(10)}/>
        case 'Business':
            return <Business color={color.palette.white} width={perfectSize(13)} height={perfectSize(10)}/>
        default:
            return <Marker color={color.palette.white} width={perfectSize(14)} height={perfectSize(11)}/>
    }
}

export const Label = (props: any) => {
    const {text, onLabelPress} = props

    return (
        <Pressable style={styles.categoryContainer} onPress={onLabelPress} >
            {iconHandler(text)}
            <Text text={text} style={styles.categoryText}/>
        </Pressable>
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