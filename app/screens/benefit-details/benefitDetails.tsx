import { useMutation, useQuery } from '@apollo/client'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, View, useWindowDimensions, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CHECK_MARK, DETAILS, LOCATION, PRICING, STAR, STAR_FILLED, TERMS } from '../../../assets/images'
import { Avatar, Button, Header, Screen, Text } from '../../components'
import { BASE_URL } from '../../services/api'
import { GET_BENEFIT } from '../../services/api/queries'
import { color } from '../../theme'
import { perfectSize } from '../../utils/dimmesion'
import RenderHtml from 'react-native-render-html';
import ArrowRight from '../../../assets/svgs/arrow_right'
import { DetailsItem } from './components/detailsItem'
import { RedeemModal } from './components/redeemModal'
import { Label } from './components/label'
import PagerView from 'react-native-pager-view'
import { SquareButton } from './components/squareButton'
import { ADD_FAVORITE_MUTATION } from '../../services/api/mutations'
import { RootStackParamList } from '../../types'

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'BenefitDetails'>;

export const BenefitDetails: React.FC = () => {
    const insets = useSafeAreaInsets()
    const insetStylePadding = { paddingTop: insets.top }
    const insetStyle = { marginTop: insets.top }

    const route = useRoute<ProfileScreenRouteProp>()
    const navigation = useNavigation()
    const { width } = useWindowDimensions();
    const { slug } = route?.params

    const { data } = useQuery(GET_BENEFIT, {
        variables: {
          slug,
        },
      })

    const benefit = data?.getBenefit

    const [showDetails, setShowDetails] = useState(false)
    const [showLocation, setShowLocation] = useState(false)
    const [showPricing, setShowPricing] = useState(false)
    const [showTerms, setShowTerms] = useState(false)
    const [showRedeemModal, setShowRedeemModal] = useState(false)
    const [activeSlide, setActiveSlide] = useState(0)
    const [isFavourited, setIsFavourited] = useState(false)

    const toggleRedeemModal = () => setShowRedeemModal(prevState => !prevState)

    const [addFavorite] = useMutation(ADD_FAVORITE_MUTATION)

    const onFavouritePress = async () => {
        setIsFavourited(prevState => !prevState)
        try {
            await addFavorite({
                variables: {
                benefitSlug: slug,
                },
            })
        } catch (e) {
            console.error(e)
            setIsFavourited(prevState => !prevState)
        }
    }

    const onWebsitePress = () => {
        if (benefit.website) {
            Linking.openURL(benefit.website)
        }
    }

    useEffect(() => {
        if (benefit) {
            setIsFavourited(benefit.favorited)
        }
    }, [benefit])

    return (
        <Screen style={{}} preset="scroll" unsafe>
            <View style={[styles.container, insetStylePadding]}>
                <View style={styles.headerBack} >
                    <Header leftIcon='back' headerText='Explore' onLeftPress={navigation.goBack} style={{marginLeft: perfectSize(8)}} />
                    <View style={[styles.avatar, insetStyle]}>
                        <Avatar />
                    </View>
                </View>
                <View>
                    {
                        benefit ? (
                            <>
                                <View style={styles.headerView}>
                                    <View style={styles.cityView}>
                                        {benefit.city ? (
                                            <Label text={benefit.city} />
                                        ) : null}
                                        <Label text={benefit.category.name} />
                                    </View>
                                    
                                    <Text preset='header' text={benefit.name} style={{marginBottom: perfectSize(8)}} />
                                    {benefit.address1 && benefit.city && benefit.country ? (
                                        <Text preset='subtitle' text={`${benefit.address1}, ${benefit.city}, ${benefit.country}`} style={{color: color.palette.neutral400}}/>
                                    ) : null}
                                </View>
                                <View>
                                    <PagerView
                                        style={{height: perfectSize(300)}}
                                        initialPage={0}
                                        onPageSelected={({ nativeEvent: { position } }) => {
                                            setActiveSlide(position)
                                        }}
                                        >
                                        {
                                            benefit.images.map((image, index) => (
                                                <Image key={index} style={styles.benefitImage} source={{uri: BASE_URL+image.large}} />
                                            ))
                                        }
                                    </PagerView>
                                    <View style={styles.pageIndicatorContainer}>
                                        {
                                            benefit.images.map((image, index) => (
                                                <View key={index} style={[styles.indicatorDot, activeSlide === index && styles.indicatorDotActive]}/>
                                            ))
                                        }
                                    </View>
                                </View>
                                <View style={styles.benefitDetailsView}>
                                    <Text text={'Benefits:'} style={styles.benefitsText}/>
                                    <Text text={benefit.benefitSummary} style={styles.benefitSummaryText}/>
                                    <View style={styles.flexD}>
                                        <Button  style={styles.redeemButton} onPress={toggleRedeemModal} >
                                            <View style={styles.flexD}>
                                                {/* <Image source={CHECK_MARK} style={styles.squareIcon} /> */}
                                                <Text text={'REDEEM'} style={styles.redeemText} />
                                            </View>
                                        </Button>
                                        <SquareButton 
                                            icon={isFavourited ? STAR : STAR_FILLED} 
                                            filled={isFavourited} 
                                            onPress={onFavouritePress}
                                        />
                                    </View>
                                    <View style={styles.line} />
                                    <DetailsItem 
                                        isShow={showDetails} 
                                        onItemPress={() => setShowDetails(prevState => !prevState)} 
                                        text={'Details'}
                                        icon={DETAILS}  
                                    />
                                    {
                                        showDetails && benefit.description ? (
                                            <>
                                                <RenderHtml
                                                    contentWidth={width}
                                                    source={{html: benefit.description}}
                                                    baseStyle={{marginTop: perfectSize(20)}}
                                                />
                                                <Button style={styles.visitWebsiteButton}>
                                                    <TouchableOpacity style={styles.visitWebsiteView} onPress={onWebsitePress} >
                                                        <Text text={'VISIT WEBSITE'} style={styles.visitWebsiteText} />
                                                        <ArrowRight />
                                                    </TouchableOpacity>
                                                </Button>
                                            </>
                                        ) : null
                                    }
                                    <DetailsItem 
                                        isShow={showLocation} 
                                        onItemPress={() => setShowLocation(prevState => !prevState)} 
                                        text={'Location'}
                                        icon={LOCATION}
                                    />
                                    {
                                        showLocation && benefit.address1 && benefit.city && benefit.country ? (
                                            <>
                                                <Text style={[styles.pricingText, {marginTop: perfectSize(20)}]} text={benefit.address1} />
                                                <Text style={styles.pricingText} text={benefit.city} />
                                                <Text style={styles.pricingText} text={benefit.country} />
                                            </>
                                        ) : null
                                    }
                                    <DetailsItem 
                                        isShow={showPricing} 
                                        onItemPress={() => setShowPricing(prevState => !prevState)} 
                                        text={'Pricing Details'}
                                        icon={PRICING}
                                    />
                                    {
                                        showPricing && benefit.benefitSummary ? (
                                            <>
                                               <Text style={[styles.pricingText, {marginTop: perfectSize(20)}]} text={'Preferred Pricing for EXEC Members'} />
                                               <Text style={styles.pricingText2} text={benefit.benefitSummary} /> 
                                            </>
                                        ) : null
                                    }
                                    <DetailsItem 
                                        isShow={showTerms} 
                                        onItemPress={() => setShowTerms(prevState => !prevState)} 
                                        text={'Terms and Condition'}
                                        icon={TERMS}
                                    />
                                    {
                                        showTerms && benefit.termsAndCondition ? (
                                            <Text style={[styles.pricingText, {marginTop: perfectSize(20)}]} text={benefit.termsAndCondition} />
                                        ) : null
                                    }
                                </View>
                                <View style={styles.similarBenefitsView}>
                                    <Text style={styles.similarBenefitsText} text={'Similar Benefits You May Like'} />
                                </View>
                                <RedeemModal isVisible={showRedeemModal} onBackdropPress={toggleRedeemModal} benefit={benefit} />
                            </>
                        ) : null
                    }
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.palette.neutral900,
        flex: 1
    },
    headerBack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        position: "absolute",
        right: perfectSize(16),
      },
    headerView: {
        paddingHorizontal: perfectSize(24), 
        paddingBottom: perfectSize(28)
    },
    cityView: {
        flexDirection: 'row', 
        marginBottom: perfectSize(17)
    },
    benefitImage: {
        width: '100%', 
        height: perfectSize(280)
    },
    benefitDetailsView: {
        flex: 1, 
        backgroundColor: color.palette.white, 
        paddingHorizontal: perfectSize(24), 
        paddingVertical: perfectSize(16)
    },
    benefitsText: {
        color: color.palette.black, 
        fontSize: 13, 
        lineHeight: 19.5, 
        marginBottom: perfectSize(2)
    },
    benefitSummaryText: {
        color: color.palette.black, 
        fontSize: 18, 
        lineHeight: 23.4, 
        fontWeight: 'bold', 
        marginBottom: perfectSize(15)
    },
    similarBenefitsView: {
        flex: 1, 
        backgroundColor: color.palette.black, 
        paddingVertical: perfectSize(30), 
        paddingHorizontal: perfectSize(24)
    },
    similarBenefitsText: {
        fontSize: 20, 
        lineHeight: 26
    },
    pricingText: {
        fontSize: 16,
        color: color.palette.black, 
        lineHeight: 24, 
        marginBottom: perfectSize(5), 
        textAlign: 'justify',
    },
    pricingText2: {
        color: color.palette.black, 
        fontWeight: 'bold', lineHeight: 24
    },
    visitWebsiteView: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    visitWebsiteButton: {
        backgroundColor: color.palette.neutral900, 
        marginTop: perfectSize(16), 
        marginBottom: perfectSize(20)
    },
    line: {
        backgroundColor: color.palette.offWhite, 
        height: 1, 
        marginVertical: perfectSize(25)
    },
    pageIndicatorContainer: {
        flexDirection: "row",
        alignSelf: "center",
        position: 'absolute',
        top: perfectSize(260),
    },
    indicatorDot: {
        backgroundColor: color.palette.white,
        height: perfectSize(6),
        width: perfectSize(6),
        marginHorizontal: perfectSize(4),
        borderRadius: perfectSize(3),
        opacity: 0.5,
    },
    indicatorDotActive: {
        opacity: 1,
    },
    squareIcon: {
        width: perfectSize(18),
        height: perfectSize(18)
    },
    redeemText: {
        marginLeft: perfectSize(16),
        fontWeight: 'bold',
    },
    flexD: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    redeemButton: {
        flex: 1, 
        height: perfectSize(48)
    },
    visitWebsiteText: {
        marginRight: 10
    }
})