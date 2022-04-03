import React, { FC, useEffect, useState } from "react"
import { ScrollView, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, Screen, Text } from "../../components"
import { NavigatorParamList } from "../../navigators/main-tabs/explore-navigator"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import PagerView from "react-native-pager-view"
import { color } from "../../theme"
import { perfectSize } from "../../utils/dimmesion"
import { SliderItem } from "./components/slider-item"
import Hotel from "../../../assets/svgs/hotel"
import { CategoryItem } from "./components/category-item"
import Lifestyle from "../../../assets/svgs/lifestyle"
import Travel from "../../../assets/svgs/travel"
import Experiences from "../../../assets/svgs/experiences"
import ArrowRightBig from "../../../assets/svgs/arrow_right_big"
import { useLazyQuery, useQuery } from "@apollo/client"
import { GET_POPULAR_BENEFITS, GET_BENEFITS_FOR_YOU, GET_CURRENT_USER, GET_HOMEPAGE_HERO_BENEFITS } from "../../services/api/queries"
import { configBenefitsForPreview } from "../../utils/utils"
import { BenefitItem } from "./components/benefit-item"
import { destinationsConst } from "../../utils/constants"
import { CATEGORY_SCREEN, DESTINATION_SCREEN } from "../../navigators/screen-name-constants"
import { useNavigation } from "@react-navigation/native"
import { DestinationsItem } from "../category/components/destinationsItem"
import { CityItem } from "../category/components/cityItem"
import { SearchView } from "./components/searchView"
import { setUser } from "../../services/redux/slices/authSlice"
import { useAppDispatch } from "../../hooks/hooks"
import Business from "../../../assets/svgs/business"

export const ExploreScreen: FC<StackScreenProps<NavigatorParamList, "explore">> = () => {
  const dispatch = useAppDispatch()
  const [activeSlide, setActiveSlide] = useState(0)
  const insets = useSafeAreaInsets()
  const insetStyle = { marginTop: insets.top }
  const navigation = useNavigation()

  const { data: popularBenefits } = useQuery(GET_POPULAR_BENEFITS)
  const { data: benefitsForYou } = useQuery(GET_BENEFITS_FOR_YOU)
  const { data: heroBenefitsData} = useQuery(GET_HOMEPAGE_HERO_BENEFITS)

  const [getCurrentUser, { data: userData }] = useLazyQuery(GET_CURRENT_USER)

  const [currentDestination, setCurrentDestination] = useState(0)

  const navigateToCategoryScreen = (category: string) => {
    navigation.navigate(CATEGORY_SCREEN, {category})
  }

  const onCityPress = (destination: string) => {
    navigation.navigate(DESTINATION_SCREEN, {destination})
  }

  useEffect(() => {
    ;(async () => {
      try {
        await getCurrentUser()
        dispatch(setUser(userData.currentUser))
      } catch (error) {
        console.log(error);
      }
    })()
  }, [userData])

  return (
    <Screen style={ROOT} preset="scroll" unsafe>
      <View style={SLIDER_CONTAINER}>
        <PagerView
          style={{height: perfectSize(300)}}
          initialPage={0}
          onPageSelected={({ nativeEvent: { position } }) => {
            setActiveSlide(position)
          }}
        >
          {
            configBenefitsForPreview(heroBenefitsData?.getHomepageHeroBenefits?.collection).map((benefit, index) => (
              <View key={index} style={SLIDE_CONTAINER}>
                <SliderItem
                  benefit={benefit}
                />
              </View>
            ))
          }
        </PagerView>
        <View style={PAGE_INDICATOR_CONTAINER}>
          {
            configBenefitsForPreview(heroBenefitsData?.getHomepageHeroBenefits?.collection).map((benefit, index) => (
              <View key={index} style={[INDICATOR_DOT, activeSlide === index && INDICATOR_DOT_ACTIVE]}/>
            ))
          }
        </View>
      </View>
      <View style={[AVATAR, insetStyle]}>
        <Avatar />
      </View>
      <SearchView text={"Search for cities or benefits"} />
      <Text style={SECTION_TITLE} text={"Browse by Category"}/>
      <View style={CATEGORIES_CONTAINER}>
        <CategoryItem
          title={"Hotel"}
          icon={<Hotel color={color.palette.white}/>}
          onPress={() => navigateToCategoryScreen('Hotel')}
        />
        <CategoryItem
          style={MIDDLE_CATEGORY}
          title={"Lifestyle"}
          icon={<Lifestyle color={color.palette.white}/>}
          onPress={() => navigateToCategoryScreen('Lifestyle')}
        />
        <CategoryItem
          title={"Travel"}
          icon={<Travel color={color.palette.white}/>}
          onPress={() => navigateToCategoryScreen('Travel')}
        />
      </View>
      <View style={CATEGORIES_CONTAINER_SECOND}>
        <CategoryItem
          title={"Experiences"}
          icon={<Experiences color={color.palette.white}/>}
          onPress={() => navigateToCategoryScreen('Experiences')}
        />
        <CategoryItem
          style={MIDDLE_CATEGORY}
          title={"Business"}
          icon={<Business color={color.palette.white}/>}
          onPress={() => navigateToCategoryScreen('Business')}

        />
        <CategoryItem
          title={"View All"}
          icon={<ArrowRightBig color={color.palette.white}/>}
          onPress={() => navigateToCategoryScreen('All Benefits')}
        />
      </View>
      
      <Text style={[SECTION_TITLE, DESTINATION]} text={"Browse by Destination"}/>
      <View style={styles.destinationsView}>
                {
                    destinationsConst.map((destination) => (
                      <DestinationsItem
                            item={destination} 
                            currentId={currentDestination} 
                            onPress={setCurrentDestination}
                            key={destination.id}
                        />
                    ))
                }
            </View>
      <View style={DESTINATIONS_CONTAINER}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={DESTINATIONS_SCROLL_CONTAINER}>
          <CityItem text={'Chicago'} onPress={() => onCityPress('Chicago')} />
          <CityItem text={'New York'} onPress={() => onCityPress('New York')} />
          <CityItem text={'Paris'} onPress={() => onCityPress('Paris')} />
          <CityItem text={'Tokyo'} onPress={() => onCityPress('Tokyo')} />
        </ScrollView>
      </View>
      <View style={TITLE_ROW_CONTAINER}>
        <Text style={TITLE_ROW_TEXT} text={"For You"}/>
      </View>
      <View style={FOR_YOU_CONTAINER}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={DESTINATIONS_SCROLL_CONTAINER}>
            {configBenefitsForPreview(benefitsForYou?.getBenefitsForYou?.collection).map((value, index) => (
              <BenefitItem value={value} key={index} />
            ))}
        </ScrollView>
      </View>
      <View style={LINE}/>
      <View style={[TITLE_ROW_CONTAINER, POPULAR_ROW]}>
        <Text style={TITLE_ROW_TEXT} text={"Popular"}/>
      </View>
      <View style={FOR_YOU_CONTAINER}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={DESTINATIONS_SCROLL_CONTAINER}>
          {
            configBenefitsForPreview(popularBenefits?.getPopularBenefits?.collection).map((value, index) => (
              <BenefitItem value={value} key={index} />
            ))
          }
        </ScrollView>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  destinationsView: {
    marginTop: perfectSize(16),
    flexDirection: 'row',
    marginLeft: perfectSize(24),
},
})

const ROOT: ViewStyle = {
  paddingBottom: 100,
}
const SLIDER_CONTAINER: ViewStyle = {
  overflow: "hidden",
}
const AVATAR: ViewStyle = {
  position: "absolute",
  top: 5,
  right: perfectSize(14),
}
const PAGE_INDICATOR_CONTAINER: ViewStyle = {
  flexDirection: "row",
  alignSelf: "center",
  top: -perfectSize(50)
}
const INDICATOR_DOT: ViewStyle = {
  backgroundColor: color.palette.white,
  height: perfectSize(6),
  width: perfectSize(6),
  marginHorizontal: perfectSize(9),
  borderRadius: perfectSize(3),
  opacity: 0.5,
}
const INDICATOR_DOT_ACTIVE: ViewStyle = {
  opacity: 1,
}
const SLIDE_CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TITLE_ROW_CONTAINER: ViewStyle = {
  marginTop: perfectSize(60),
  flexDirection: "row",
  justifyContent: "space-between",
}
const SECTION_TITLE: TextStyle = {
  marginLeft: perfectSize(24),
  fontSize: perfectSize(20),
  lineHeight: perfectSize(26),
  color: color.palette.white,
}
const TITLE_ROW_TEXT: TextStyle = {
  marginLeft: perfectSize(24),
  fontSize: perfectSize(20),
  lineHeight: perfectSize(26),
  color: color.palette.white,
}
const CATEGORIES_CONTAINER: ViewStyle = {
  flexDirection: "row",
  marginTop: perfectSize(20),
  marginHorizontal: perfectSize(24),
}
const CATEGORIES_CONTAINER_SECOND: ViewStyle = {
  flexDirection: "row",
  marginTop: perfectSize(4),
  marginHorizontal: perfectSize(24),
}
const MIDDLE_CATEGORY: ViewStyle = {
  marginHorizontal: perfectSize(4),
}
const DESTINATION: TextStyle = {
  marginTop: perfectSize(60),
}
const DESTINATIONS_CONTAINER: ViewStyle = {
  marginTop: perfectSize(20),
}
const FOR_YOU_CONTAINER: ViewStyle = {
  marginTop: perfectSize(20),
}
const DESTINATIONS_SCROLL_CONTAINER: ViewStyle = {
  paddingHorizontal: perfectSize(24),
}
const LINE: ViewStyle = {
  marginTop: perfectSize(30),
  height: perfectSize(1),
  alignSelf: "stretch",
  backgroundColor: color.palette.mineShaft2,
}
const POPULAR_ROW: ViewStyle = {
  marginTop: perfectSize(30),
}