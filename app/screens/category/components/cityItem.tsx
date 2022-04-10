import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Text } from '../../../components';
import { BASE_URL } from '../../../services/api';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';

export const CityItem = (props) => {
    const {city, onCityPress, style = {}} = props
    const image = city.image.medium ? BASE_URL + city.image.medium : "https://placeimg.com/360/640/any"

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={() => onCityPress(city.name)} >
            <FastImage style={styles.image} source={{uri: image, priority: FastImage.priority.normal}}/>
            <Text style={styles.title} text={city.name}/>
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
        opacity: 0.9,
    },
    title: {
        color: color.palette.white,
        fontSize: perfectSize(18),
        lineHeight: perfectSize(24),
        marginBottom: perfectSize(16),
    }
})