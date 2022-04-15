import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Linking, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { CHECK_MARK_BLACK, CLOSE, COPY, LOGO_WITH_NAME, REDEEM_MODAL_BG, SHARE } from '../../../../assets/images';
import { Button, Text, Wallpaper } from '../../../components';
import { color } from '../../../theme';
import { perfectSize } from '../../../utils/dimmesion';
import { CopiedModal } from './copiedModal';
import { Label } from './label';
import { SquareButton } from './squareButton';
import { REDEEM_MUTATION, REDEEM_WITH_REGISTRATION_MUTATION } from '../../../services/api/mutations';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { CATEGORY_SCREEN, DESTINATION_SCREEN } from '../../../navigators/screen-name-constants';
import { RedeemInput } from './redeemInput';

export const RedeemModal = (props) => {
    const {isVisible, onBackdropPress, benefit, redemption, setRedemption} = props
    const navigation = useNavigation()
    const [isRedeemed, setIsRedeemed] = useState(false)
    const [showCopiedModal, setShowCopiedModal] = useState(false)
    const [showCopiedModal2, setShowCopiedModal2] = useState(false)
    const [redeemButtonText, setRedeemButtonText] = useState('REVEAL LINK')

    const [redeem, {loading: redeemLoading}] = useMutation(REDEEM_MUTATION)
    const [redeemWithRegistrationForm, { loading }] = useMutation(REDEEM_WITH_REGISTRATION_MUTATION)

    // registration form submission vars
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const isDisabled = userName && userEmail && userPhone && !loading

    const title = isRedeemed ? 'Redeemed!' : 'How to Redeem'

    const onRevealPress = async () => {
        if (isRedeemed) {
            onBackdropPress()
        } else {
            let response
            try {
                response = await redeem({
                    variables: {
                    benefitSlug: benefit.slug,
                    },
                })
                setRedemption(response.data.redeemBenefit.redemption)
                if (benefit.redemptionType === 'referral_link') {
                    setRedeemButtonText(response.data.redeemBenefit.redemption.redemptionLink)
                } else {
                    setRedeemButtonText(response.data.redeemBenefit.redemption.redemptionCode)
                }
                setIsRedeemed(true)
            } catch (e) {
                Alert.alert(e.message)
            }
        }
    }

    const onSubmitAndRedeemPress = async () => {
        let response
        try {
            response = await redeemWithRegistrationForm({
                variables: {
                    benefitSlug: benefit.slug,
                    userName,
                    userEmail,
                    userPhone
                }
            })
            setRedemption(response.data.redeemWithRegistrationFormBenefit.redemption)
            setIsRedeemed(true)
            setShowCopiedModal2(true)
            setTimeout(() => {
                setShowCopiedModal2(false)
                onBackdropPress()
            }, 500);
        } catch (e) {
            Alert.alert(e.message)
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
        onBackdropPress()
    }

    const onLabelPress = (type: string, text: string) => {
        if (type === 'category') {
            navigation.navigate(CATEGORY_SCREEN, {category: text})
        } else if (type === 'city') {
            navigation.navigate(DESTINATION_SCREEN, {destination: text})
        }
        onBackdropPress()
    }

    const redeemedStyle = {backgroundColor: isRedeemed ? color.palette.white : color.palette.primary500}
    const redeemedTextStyle = {color: isRedeemed ? color.palette.black : color.palette.white, fontWeight: 'bold'}

    // if (benefit.redemptionType === 'registration') {
    //     return
    // }

    

    return (
        <Modal isVisible={isVisible} onBackdropPress={onBackdropPress} avoidKeyboard >
            <View style={styles.container}>
                <Wallpaper backgroundImage={REDEEM_MODAL_BG} />
                <TouchableOpacity onPress={onBackdropPress} style={styles.closeButton}>
                    <Image style={styles.closeIcon} source={CLOSE} />
                </TouchableOpacity>
                <View style={styles.cityView}>
                    {benefit.city ? (
                        <Label text={benefit.city} onLabelPress={() => onLabelPress('city', benefit.city)} />
                    ) : null}
                    <Label text={benefit.category.name} onLabelPress={() => onLabelPress('category', benefit.category.name)} />
                </View>
                <Text preset='header' text={benefit.name} style={styles.benefitNameText} />
                {benefit.address1 && benefit.city && benefit.country ? (
                    <Text preset='subtitle' text={`${benefit.address1}, ${benefit.city}, ${benefit.country}`} style={styles.benefitSummaryText}/>
                ) : null}
                <View style={styles.cardView}>
                    <Image source={LOGO_WITH_NAME} style={styles.logo} />
                    <Text text={title} style={styles.howToRedeemText} />
                    {benefit.redemptionType === 'registration' ? (
                        <View>
                            <Text text={'Please fill the form below to redeem.'} style={styles.instructionText2} />
                            <RedeemInput value={userName} onChangeText={setUserName} placeholder={'Your name'} />
                            <RedeemInput value={userEmail} onChangeText={setUserEmail} placeholder={'Your email'} />
                            <RedeemInput value={userPhone} onChangeText={setUserPhone} placeholder={'Your mobile number'} />
                            <Button text={'submit and redeem'} onPress={onSubmitAndRedeemPress} disabled={!isDisabled} />
                            <CopiedModal isVisible={showCopiedModal2} title={'Redeemed'} />

                        </View>
                    ) : (
                        <>
                            <Text 
                                text={'Please click the link to book. Should the rates not load, please be sure the Corporate ID booking code is copied and entered to your search, which should show EXEC or The Community Company designated rates.'} 
                                style={styles.instructionText}    
                            />
                            <View style={styles.flexD}>
                                <Button style={[styles.revealLinkButton, redeemedStyle]} onPress={onRevealPress} disabled={redeemLoading} >
                                    <View style={styles.flexD}>
                                        {
                                            isRedeemed ? (
                                                <Image source={CHECK_MARK_BLACK} style={styles.checkMarkIcon}/>
                                            ) : null
                                        }
                                        <Text numberOfLines={1} text={redeemButtonText} style={redeemedTextStyle} />

                                    </View>
                                </Button>
                                {
                                    isRedeemed ? (
                                        <View style={styles.flexD}>
                                            <SquareButton icon={COPY} filled onPress={onCopyPress} />
                                            <SquareButton icon={SHARE} filled onPress={onOpenLinkPress} />
                                        </View>
                                    ) : null
                                }
                            </View>
                        </>
                    )}
                </View>
                <CopiedModal isVisible={showCopiedModal} text={redeemButtonText} title={'Copied!'} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        // height: '90%',
        position: 'absolute',
        left: -20,
        right: -20,
        bottom: -20
    },
    closeButton: {
        // position: 'absolute',
        marginRight: perfectSize(14),
        marginTop: perfectSize(14),
        alignSelf: 'flex-end',
        width: perfectSize(40),
        height: perfectSize(40),
    },
    closeIcon: {
        width: perfectSize(40),
        height: perfectSize(40),
    },
    cityView: {
        flexDirection: 'row', 
        justifyContent: 'center',
        marginTop: perfectSize(12)
    },
    benefitNameText: { 
        textAlign: 'center', 
        maxWidth: '80%', 
        alignSelf: 'center', 
        marginTop: perfectSize(10)
    },
    benefitSummaryText: {
        color: color.palette.neutral400, 
        alignSelf: 'center',
        maxWidth: '80%', 
    },
    cardView: {
        backgroundColor: color.palette.black, 
        borderRadius: perfectSize(20),
        marginHorizontal: perfectSize(24),
        paddingVertical: perfectSize(20),
        paddingHorizontal: perfectSize(36),
        marginVertical: perfectSize(20),
    },
    logo: {
        alignSelf: 'center', 
    },
    howToRedeemText: {
        fontSize: 20,
        lineHeight: 26,
        alignSelf: 'center',
        marginTop: perfectSize(30)
    },
    instructionText: {
        marginTop: perfectSize(24),
        color: color.palette.neutral400,
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: perfectSize(30)
    },
    instructionText2: {
        marginVertical: perfectSize(16),
        color: color.palette.neutral400,
        textAlign: 'center',
        alignSelf: 'center',
    },
    revealLinkButton: {
        flex: 1
    },
    flexD: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkMarkIcon: {
        width: perfectSize(18),
        height: perfectSize(18),
        marginRight: perfectSize(5),
        marginLeft: perfectSize(16)
    },
})