import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { DEFAULT_IMAGE, FAVORITE, REDEEMED } from '../../../../assets/images';
import { Text } from '../../../components';
import { BENEFIT_DETAILS_SCREEN } from '../../../navigators/screen-name-constants';
import { BASE_URL } from '../../../services/api';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { Label } from '../../benefit-details/components/label';

export const HistoryBenefitItem = (props) => {
    const { value } = props
    const navigation = useNavigation()

    const onBenefitPress = () => {
        navigation.navigate(BENEFIT_DETAILS_SCREEN, {slug: value.benefit.slug})
    }

    // const image = value.benefit.images[0] ? BASE_URL + value.benefit.images[0].medium : "https://placeimg.com/360/640/any"
    const source = value.benefit.images[0] ? {uri: BASE_URL + value.benefit.images[0].medium, priority: FastImage.priority.normal} : DEFAULT_IMAGE
    

    return (
        <Pressable style={styles.container} onPress={onBenefitPress} >
            <FastImage source={source} style={styles.image} />
            <View style={styles.categoryView}>
                <Label text={value.benefit.category.name} />
                <View style={styles.iconsView}>
                    {value.benefit.redeemed && <Image source={REDEEMED} style={styles.icon} />}
                    {value.benefit.favorited && <Image source={FAVORITE} style={styles.icon} />}
                </View>
            </View>
            <Text style={styles.title} text={value.benefit.name}/>
            <Text style={styles.description} text={value.benefit.benefitSummary}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: perfectSize(36)
    },
    image: {
        width: '100%',
        height: perfectSize(149),
        borderRadius: perfectSize(5)
    },
    categoryView: {
        marginTop: perfectSize(-12.5),
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: perfectSize(16)
    },
    iconsView: {
        flexDirection: "row",
    },
    icon: {
        width: perfectSize(21),
        height: perfectSize(21),
        marginLeft: perfectSize(10)
    },
    title: {
        marginTop: perfectSize(13),
        marginLeft: perfectSize(16),
        fontSize: perfectSize(22),
        lineHeight: perfectSize(29),
        color: color.palette.white,
    },
    description: {
        marginLeft: perfectSize(16),
        fontSize: perfectSize(15),
        lineHeight: perfectSize(20),
        color: color.palette.primary600,
    }
})
