import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Text } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';

export const CityItem = (props) => {
    const {text} = props
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{uri: "https://placeimg.com/360/640/any"}}/>
            <Text style={styles.title} text={text}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: perfectSize(180),
        width: perfectSize(130),
        marginRight: perfectSize(8),
        borderRadius: perfectSize(5),
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    image: {
        position: "absolute",
        height: "100%",
        width: "100%",
    },
    title: {
        color: color.palette.white,
        fontSize: perfectSize(18),
        lineHeight: perfectSize(24),
        marginBottom: perfectSize(16),
    }
})