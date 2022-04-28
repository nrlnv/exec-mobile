import { useMutation, useQuery } from '@apollo/client'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, View, useWindowDimensions, StyleSheet, TouchableOpacity, Linking, Platform, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CHECK_MARK, COPY_FILLED, DEFAULT_IMAGE, DETAILS, LOCATION, PRICING, SHARE_FILLED, STAR, STAR_FILLED, TERMS } from '../../../assets/images'
import { Avatar, Button, Header, Screen, Text } from '../../components'
import { BASE_URL } from '../../services/api'
import { GET_BENEFIT, GET_BENEFITS, GET_SIMILAR_BENEFITS } from '../../services/api/queries'
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
import { CATEGORY_SCREEN, DESTINATION_SCREEN } from '../../navigators/screen-name-constants'
import { Redemption } from '../../types/generatedGql'
import { CopiedModal } from './components/copiedModal'
import FastImage from 'react-native-fast-image'
import MapView, {Marker} from 'react-native-maps';
import { BenefitsSlider } from '../explore/components/benefitsSlider'

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'BenefitDetails'>;

export const BenefitDetails: React.FC = () => {
    const insets = useSafeAreaInsets()
    const insetStylePadding = { paddingTop: insets.top }
    const insetBottom = {paddingBottom: insets.bottom}
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
    const [showCopiedModal, setShowCopiedModal] = useState(false)

    const [redemption, setRedemption] = useState<Partial<Redemption>>({})

    const toggleRedeemModal = () => setShowRedeemModal(prevState => !prevState)

    const [addFavorite] = useMutation(ADD_FAVORITE_MUTATION)

    const { data: similarBenefits} = useQuery(GET_SIMILAR_BENEFITS, {variables: {
        slug
      }})

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

    const onDirectionPress = (lat: number, lng: number) => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${lat},${lng}`;
        const label = benefit.name;
        const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`
        })
        Linking.openURL(url);
    }

    const onLabelPress = (type: string, text: string) => {
        if (type === 'category') {
            navigation.navigate(CATEGORY_SCREEN, {category: text})
        } else if (type === 'city') {
            navigation.navigate(DESTINATION_SCREEN, {destination: text})
        }
    }

    const onCopyPress = () => {
        setShowCopiedModal(true)
        setTimeout(() => {
            setShowCopiedModal(false)
        }, 500);
    }

    const onOpenLinkPress = async () => {
        await Linking.canOpenURL(redemption?.redemptionLink)
            .then(async () => {
                await Linking.openURL(redemption?.redemptionLink)
            })
    }

    useEffect(() => {
        if (benefit) {
            setIsFavourited(benefit.favorited)
        }
    }, [benefit])

    return (
        // <Screen preset="scroll" unsafe>
            <ScrollView style={[styles.container, insetStylePadding]} contentContainerStyle={insetBottom} >
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
                                            <Label text={benefit.city} onLabelPress={() => onLabelPress('city', benefit.city)} />
                                        ) : null}
                                        <Label text={benefit.category.name} onLabelPress={() => onLabelPress('category', benefit.category.name)} />
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
                                            benefit.images.length > 0 ? benefit.images.map((image, index) => (
                                                <FastImage key={index} style={styles.benefitImage} source={{uri: BASE_URL+image.medium, priority: FastImage.priority.normal}} />
                                            )) : (<FastImage source={DEFAULT_IMAGE} />)
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
                                    {benefit.benefitSummary ? (<Text text={benefit.benefitSummary} style={styles.benefitSummaryText}/>) : null}
                                    {benefit.otherRateOffer ? (<Text text={benefit.otherRateOffer} style={styles.benefitSummaryText}/>) : null}
                                    <View style={styles.flexD}>
                                        <Button  style={styles.redeemButton} onPress={toggleRedeemModal} >
                                            <View style={styles.flexD}>
                                                {redemption?.redemptionCode || redemption?.redemptionLink ? (
                                                    <Image source={CHECK_MARK} style={styles.squareIcon} />
                                                    ) : null}
                                                <Text text={redemption?.redemptionCode || 'REDEEM'} style={styles.redeemText} />
                                            </View>
                                        </Button>
                                        {
                                            Object.keys(redemption).length > 0 && (
                                                <>
                                                    <SquareButton 
                                                        icon={COPY_FILLED} 
                                                        onPress={onCopyPress}
                                                    />
                                                    {redemption?.redemptionLink ? (<SquareButton 
                                                        icon={SHARE_FILLED} 
                                                        onPress={onOpenLinkPress}
                                                    />) : null}
                                                </>
                                            )
                                        }
                                        <SquareButton 
                                            icon={isFavourited ? STAR : STAR_FILLED} 
                                            filled={isFavourited} 
                                            onPress={onFavouritePress}
                                        />
                                    </View>
                                    <View style={styles.line} />
                                    {
                                        benefit.description ? (
                                            <DetailsItem 
                                                isShow={showDetails} 
                                                onItemPress={() => setShowDetails(prevState => !prevState)} 
                                                text={'Details'}
                                                icon={DETAILS}  
                                            />
                                        ) : null
                                    }
                                    {
                                        showDetails && benefit.description ? (
                                            <>
                                                <RenderHtml
                                                    contentWidth={width}
                                                    tagsStyles={{
                                                        body: {color: 'black'}
                                                    }}
                                                    source={{html: benefit.description}}
                                                    baseStyle={{marginTop: perfectSize(20)}}
                                                />
                                                <Button style={styles.visitWebsiteButton} onPress={onWebsitePress}>
                                                    <View style={styles.visitWebsiteView} >
                                                        <Text text={'VISIT WEBSITE'} style={styles.visitWebsiteText} />
                                                        <ArrowRight />
                                                    </View>
                                                </Button>
                                            </>
                                        ) : null
                                    }
                                    {
                                        benefit.address1 && benefit.city && benefit.country ? (
                                            <DetailsItem 
                                                isShow={showLocation} 
                                                onItemPress={() => setShowLocation(prevState => !prevState)} 
                                                text={'Location'}
                                                icon={LOCATION}
                                            />
                                        ) : null
                                    }
                                    {
                                        showLocation && benefit.address1 && benefit.city && benefit.country ? (
                                            <>
                                                <Text style={[styles.pricingText, {marginTop: perfectSize(20)}]} text={benefit.address1} />
                                                <Text style={styles.pricingText} text={benefit.city} />
                                                <Text style={styles.pricingText} text={benefit.country} />
                                                {benefit.latitude && benefit.longitude ? (
                                                    <>
                                                    <MapView
                                                        initialRegion={{
                                                            latitude: benefit.latitude,
                                                            longitude: benefit.longitude,
                                                            latitudeDelta: 0.0922,
                                                            longitudeDelta: 0.0421,
                                                        }}
                                                        style={styles.map}
                                                        zoomControlEnabled
                                                        zoomEnabled
                                                    >
                                                        <Marker
                                                            // key={index}
                                                            coordinate={{ latitude : benefit.latitude , longitude : benefit.longitude }}
                                                            title={'Benefit'}
                                                            // description={marker.description}
                                                        />
                                                    </MapView>
                                                    <Button style={styles.visitWebsiteButton} onPress={() => onDirectionPress(37.78825, -122.4324)}>
                                                        <View style={styles.visitWebsiteView} >
                                                            <Text text={'GET DIRECTION'} style={styles.visitWebsiteText} />
                                                            <ArrowRight />
                                                        </View>
                                                    </Button>
                                                    </>
                                                ) : null}
                                            </>
                                        ) : null
                                    }
                                    {benefit.rates?.length ? (<DetailsItem 
                                        isShow={showPricing} 
                                        onItemPress={() => setShowPricing(prevState => !prevState)} 
                                        text={'Pricing Details'}
                                        icon={PRICING}
                                    />) : null}
                                    {
                                        showPricing && benefit.rates?.length ? (
                                            // <>
                                            //    <Text style={[styles.pricingText, {marginTop: perfectSize(20)}]} text={'Preferred Pricing for EXEC Members'} />
                                            //    <Text style={styles.pricingText2} text={benefit.benefitSummary} /> 
                                            // </>
                                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                                <View>
                                                    <Text text={'Category'} style={styles.pricingText2}/>
                                                    {benefit.rates.map((rate, index) => (
                                                        <Text key={index} text={rate.category} style={styles.pricingText}/>
                                                    ))}
                                                </View>
                                                <View style={{alignItems: 'center'}}>
                                                    <Text text={'EXEC Rate'} style={styles.pricingText2}/>
                                                    {benefit.rates.map((rate, index) => (
                                                        <Text key={index} text={`$${rate.execRate}`} style={styles.pricingText}/>
                                                    ))}
                                                </View>
                                                <View style={{alignItems: 'center'}}>
                                                    <Text text={'Standard'} style={styles.pricingText2}/>
                                                    {benefit.rates.map((rate, index) => (
                                                        <Text key={index} text={`$${rate.standardRate}`} style={styles.pricingText}/>
                                                    ))}
                                                </View>
                                            </View>
                                        ) : null
                                    }
                                    {benefit.termsAndCondition ? (<DetailsItem 
                                        isShow={showTerms} 
                                        onItemPress={() => setShowTerms(prevState => !prevState)} 
                                        text={'Terms and Condition'}
                                        icon={TERMS}
                                    />) : null}
                                    {
                                        showTerms && benefit.termsAndCondition ? (
                                            <Text style={[styles.pricingText, {marginTop: perfectSize(20)}]} text={benefit.termsAndCondition} />
                                        ) : null
                                    }
                                </View>
                                <BenefitsSlider 
                                    benefits={similarBenefits?.getRelatedBenefits?.collection} 
                                    text={'Similar Benefits You May Like'} 
                                    moreButton={false}
                                />
                                <RedeemModal 
                                    isVisible={showRedeemModal} 
                                    onBackdropPress={toggleRedeemModal} 
                                    benefit={benefit}
                                    redemption={redemption}
                                    setRedemption={setRedemption}    
                                />
                                <CopiedModal isVisible={showCopiedModal} text={redemption?.redemptionCode || ''} title={'Copied'} />
                            </>
                        ) : null
                    }
                </View>
            </ScrollView>
        // </Screen>
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
    pricingText: {
        fontSize: 16,
        color: color.palette.black, 
        lineHeight: 24, 
        marginBottom: perfectSize(5), 
        textAlign: 'justify',
    },
    pricingText2: {
        color: color.palette.black, 
        fontWeight: 'bold', 
        lineHeight: 24
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
    },
    map: {
        width: '100%',
        height: perfectSize(300),
        borderRadius: 10,
        marginTop: perfectSize(16)
    }
})