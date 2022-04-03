import React from 'react'
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native'
import ArrowRight from '../../../../assets/svgs/arrow_right'
import { Text } from '../../../components'
import { color } from '../../../theme'
import { perfectSize } from '../../../utils/dimmesion'
import { configBenefitsForPreview } from '../../../utils/utils'
import { BenefitItem } from './benefit-item'

export const BenefitsSlider = (props) => {
    const {benefits, text, moreButton = true, onMorePress} = props
    return (
        <>
            <View style={styles.titleRowContainer}>
                <Text style={styles.titleRowText} text={text}/>
                {
                    moreButton && (
                        <TouchableOpacity style={styles.moreContainer} onPress={onMorePress} >
                            <Text style={styles.moreText} text={"more"}/>
                            <ArrowRight color={color.palette.neutral400}/>
                        </TouchableOpacity>
                    )
                }
                
            </View>
            <View style={styles.benefitsView}>
                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}>
                    {configBenefitsForPreview(benefits).map((value, index) => (
                    <BenefitItem value={value} key={index} />
                    ))}
                </ScrollView>
            </View>
            <View style={styles.line}/>
        </>
    )
}

const styles = StyleSheet.create({
    titleRowContainer: {
        marginTop: perfectSize(30),
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titleRowText: {
        marginLeft: perfectSize(24),
        fontSize: perfectSize(20),
        lineHeight: perfectSize(26),
        color: color.palette.white,
    },
    benefitsView: {
        marginTop: perfectSize(20),
    },
    scrollContainer: {
        paddingHorizontal: perfectSize(24),
    },
    line: {
        marginTop: perfectSize(30),
        height: perfectSize(1),
        alignSelf: "stretch",
        backgroundColor: color.palette.mineShaft2,
    },
    moreContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: perfectSize(20),
    },
    moreText: {
        color: color.palette.neutral400,
        marginRight: perfectSize(8),
    }
})
