import React, { FC } from "react"
import { View, StyleSheet, Image, TouchableOpacity, Platform, StatusBar } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { useNavigation } from '@react-navigation/native';
import { NavigatorParamList } from "../../navigators"
import { Screen, Text, Wallpaper } from "../../components"
import { color } from "../../theme"
import { HISTORY_HEADER, PROFILE_DOWN, PROFILE_UP, USER_IMAGE } from "../../../assets/images"
import Edit from '../../../assets/svgs/edit'
import { perfectSize } from "../../utils/dimmesion"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { accountItems } from "../../utils/constants"
import { AccountItem } from "./components/accountItem"
import { useAppSelector } from "../../hooks/hooks"
import { selectUser } from "../../services/redux/slices/authSlice"
import { BASE_URL } from "../../services/api"
import {IMAGE_SCREEN} from '../../navigators/screen-name-constants'
import FastImage from "react-native-fast-image";
import ArrowLeft from "../../../assets/svgs/arrow_left";

export const MyAccountScreen: FC<StackScreenProps<NavigatorParamList, "myAccount">> = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const insetStyle = { paddingTop: Platform.OS === 'ios' ? insets.top : StatusBar.currentHeight }
  const user = useAppSelector(selectUser)

  const {firstName = '', lastName = '', currentYearRedemptionsCount = 0, companyName = '', redemptionsCount = 0, photo = {}} = user || {}
  const avatarUrl = BASE_URL + photo.thumbnail
  const source = photo.thumbnail ? {uri: avatarUrl, priority: FastImage.priority.normal} : USER_IMAGE

  return (
    <Screen style={styles.container} preset="scroll" unsafe>
      <View style={insetStyle} >
        <Wallpaper backgroundImage={HISTORY_HEADER} style={styles.headerImage} />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} >
            <ArrowLeft color={color.palette.neutral500} />
            <Text text={'Back'} style={styles.backText} />
        </TouchableOpacity>
        <View style={styles.flexD}>
          <TouchableOpacity onPress={() => navigation.navigate(IMAGE_SCREEN)} >
            <FastImage source={source} style={styles.avatar} />
            <View style={styles.editIcon}>
              <Edit />
            </View>
          </TouchableOpacity>
          <View style={styles.nameView} >
            <Text text={`${firstName} ${lastName}`} style={styles.nameText} />
            <Text text={`${companyName || ''}`} style={styles.companyText} />
          </View>
        </View>
      </View>
      <View style={styles.redemptionsView}>
        <View style={styles.redemptionImageView} >
          <Image source={PROFILE_UP} style={styles.profileUp} />
          <Image source={PROFILE_DOWN} style={styles.profileDown} />
          <View style={styles.midLine} />
        </View>
        <View style={styles.countViews}>
          <View style={styles.countView}>
            <Text text={`${currentYearRedemptionsCount}`} style={styles.countText} />
            <Text text={`${currentYearRedemptionsCount > 1 ? 'redemptions' : 'redemption'}\n this year`} style={styles.redemptionsText} />
          </View>
          <View style={styles.countView}>
            <Text text={`${redemptionsCount}`} style={styles.countText} />
            <Text text={'all\nredemptions'} style={styles.redemptionsText} />
          </View>
        </View>
        <View style={styles.accountItemsView}>
          {
            accountItems.map(item => (
              <AccountItem item={item} key={item.id} />
            ))
          }
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.palette.black,
    flex: 1,
  },
  flexD: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  headerImage: {
    width: '100%', 
    height: perfectSize(168),
  },
  avatar: {
    width: perfectSize(64),
    height: perfectSize(64),
    marginLeft: perfectSize(27),
    borderRadius: perfectSize(32),
    borderWidth: 2,
    borderColor: color.palette.white
  },
  nameView: {
    marginLeft: perfectSize(27)
  },
  nameText: {
    fontSize: 26,
    lineHeight: 34
  },
  companyText: {
    color: color.palette.neutral500
  },
  redemptionsView: {
    marginTop: perfectSize(20)
  },
  profileUp: {
    width: '100%',
    height: perfectSize(36)
  },
  profileDown: {
    width: '100%',
    height: perfectSize(99)
  },
  midLine: {
    width: perfectSize(1),
    height: perfectSize(77),
    backgroundColor: color.palette.white,
    opacity: 0.3,
    position: 'absolute',
    alignSelf: 'center',
    transform: [{rotate: '12deg'}],
    marginTop: perfectSize(29)
  },
  redemptionImageView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  countViews: {
    flexDirection: 'row'
  },
  countView: {
    flex: 1,
    height: perfectSize(135),
    alignItems: 'center',
    justifyContent: 'center'
  },
  redemptionsText: {
    fontSize: 13,
    lineHeight: 15.6,
    textAlign: 'center',
  },
  countText: {
    fontSize: 44,
    lineHeight: 44,
  },
  accountItemsView: {
    marginTop: perfectSize(20)
  },
  editIcon: {
    position: 'absolute', 
    right: 0, 
    bottom: 0, 
    backgroundColor: color.palette.black,
    width: perfectSize(26),
    height: perfectSize(26),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: perfectSize(13),
    borderWidth: 2,
    borderColor: color.palette.white
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: perfectSize(24),
    marginBottom: perfectSize(16)
},
backText: {
    color: color.palette.neutral500,
    marginLeft: perfectSize(10)
},
})