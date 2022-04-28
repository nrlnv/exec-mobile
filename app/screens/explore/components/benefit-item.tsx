import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image, Pressable, StyleSheet, View } from "react-native"
import FastImage from "react-native-fast-image"
import { DEFAULT_IMAGE, FAVORITE, REDEEMED } from "../../../../assets/images"
import { Text } from "../../../components"
import { BENEFIT_DETAILS_SCREEN } from "../../../navigators/screen-name-constants"
import { BASE_URL } from "../../../services/api"
import { color } from "../../../theme"
import { Benefit } from "../../../types/generatedGql"
import { perfectSize } from "../../../utils/dimmesion"
import { getBenefitInfo } from "../../../utils/utils"
import { Label } from "../../benefit-details/components/label"

export interface BenefitItemProps {
    value: Benefit,
}

export const BenefitItem = (props) => {
    const { value } = props
    const navigation = useNavigation()

    const info = getBenefitInfo(value)
    const onBenefitPress = () => {
        navigation.navigate(BENEFIT_DETAILS_SCREEN, {slug: value.slug})
    }

    // const image = value.images[0] ? BASE_URL + value.images[0] : "https://placeimg.com/360/640/any"
    const source = value.images[0] ? {uri: BASE_URL + value.images[0], priority: FastImage.priority.normal} : DEFAULT_IMAGE
    return (
        <Pressable style={styles.container} onPress={onBenefitPress} >
            <FastImage style={styles.image} source={source} />
            {/* <FastImage style={styles.image} source={{uri: image, priority: FastImage.priority.normal}}/> */}
            <View style={styles.categoryView}>
                <Label text={value.category} />
                <View style={styles.iconsView}>
                    {value.redeemed && <Image source={REDEEMED} style={styles.icon} />}
                    {value.favorited && <Image source={FAVORITE} style={styles.icon} />}
                </View>
            </View>
            <Text style={styles.title} text={value.name}/>
            <Text style={styles.description} text={info}/>
        </Pressable>
    )
  }

  const styles = StyleSheet.create({
    container: {
        width: perfectSize(220),
        marginRight: perfectSize(8),
        // overflow: "hidden",
    },
    image: {
        height: perfectSize(150),
        width: perfectSize(220),
        borderRadius: perfectSize(5),
    },
    categoryView: {
        marginTop: perfectSize(-12.5),
        flexDirection: "row",
        justifyContent: "space-between",
        // marginRight: perfectSize(5),
        marginHorizontal: perfectSize(16)
    },
    iconsView: {
        flexDirection: "row",
        // marginRight: perfectSize(16),
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