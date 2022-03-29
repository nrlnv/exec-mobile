import React, { FC, useState } from "react"
import { ImageStyle, ScrollView, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, Screen, Text } from "../../components"
import { NavigatorParamList } from "../../navigators/main-tabs/explore-navigator"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import PagerView from "react-native-pager-view"
import { color } from "../../theme"
import { perfectSize } from "../../utils/dimmesion"
import { SliderItem } from "./components/slider-item"
import Search from "../../../assets/svgs/search"
import Hotel from "../../../assets/svgs/hotel"
import { CategoryItem } from "./components/category-item"
import Lifestyle from "../../../assets/svgs/lifestyle"
import Travel from "../../../assets/svgs/travel"
import Restaurant from "../../../assets/svgs/restaurant"
import Experiences from "../../../assets/svgs/experiences"
import ArrowRightBig from "../../../assets/svgs/arrow_right_big"
import ArrowRight from "../../../assets/svgs/arrow_right"
import { useQuery } from "@apollo/client"
import { GET_POPULAR_BENEFITS, GET_BENEFITS_FOR_YOU, GET_CURRENT_USER, GET_HOMEPAGE_HERO_BENEFITS } from "../../services/api/queries"
import { configBenefitsForPreview } from "../../utils/utils"
import { BenefitItem } from "./components/benefit-item"
import { BASE_URL } from "../../services/api"
import { destinationsConst } from "../../utils/constants"
import { CATEGORY_SCREEN } from "../../navigators/screen-name-constants"
import { useNavigation } from "@react-navigation/native"
import { DestinationsItem } from "../category/components/destinationsItem"
import { CityItem } from "../category/components/cityItem"

export const ExploreScreen: FC<StackScreenProps<NavigatorParamList, "explore">> = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const insets = useSafeAreaInsets()
  const insetStyle = { marginTop: insets.top }
  const navigation = useNavigation()

  const { data: popularBenefits } = useQuery(GET_POPULAR_BENEFITS)
  const { data: benefitsForYou } = useQuery(GET_BENEFITS_FOR_YOU)
  const { data: heroBenefitsData} = useQuery(GET_HOMEPAGE_HERO_BENEFITS)
  const { data: userData } = useQuery(GET_CURRENT_USER)

  const [currentDestination, setCurrentDestination] = useState(0)

  const {photo = {}} = userData?.currentUser || {}

  const avatarUrl = BASE_URL + photo.thumbnail

  const navigateToCategoryScreen = (category) => {
    navigation.navigate(CATEGORY_SCREEN, {category})
  }

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
        <Avatar image={avatarUrl}/>
      </View>
      <View style={SEARCH_CONTAINER}>
        <Search/>
        <Text style={SEARCH_TEXT} text={"Search for cities or benefits"}/>
      </View>
      <Text style={SECTION_TITLE} text={"Browse by Category"}/>
      <View style={CATEGORIES_CONTAINER}>
        <CategoryItem
          title={"Hotel"}
          icon={<Hotel color={color.palette.white}/>}
          onPress={() => navigateToCategoryScreen('Hotels')}
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
          title={"Restaurants"}
          icon={<Restaurant color={color.palette.white}/>}
          onPress={() => navigateToCategoryScreen('Restaurants')}

        />
        <CategoryItem
          title={"View All"}
          icon={<ArrowRightBig color={color.palette.white}/>}
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
          <CityItem text={'Oral'} />
          <CityItem text={'Atyrau'} />
          <CityItem text={'Aqtau'} />
          <CityItem text={'Aqtobe'} />
        </ScrollView>
      </View>
      <View style={TITLE_ROW_CONTAINER}>
        <Text style={TITLE_ROW_TEXT} text={"For You"}/>
        <View style={MORE_CONTAINER}>
          <Text style={SECTION_MORE} text={"more"}/>
          <ArrowRight color={color.palette.neutral400}/>
        </View>
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
        <View style={MORE_CONTAINER}>
          <Text style={SECTION_MORE} text={"more"}/>
          <ArrowRight color={color.palette.neutral400}/>
        </View>
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
  destinationItem: {
      marginRight: perfectSize(8),
      paddingHorizontal: perfectSize(14),
      paddingVertical: perfectSize(6),
      borderRadius: 100,
  },
  destinationText: {
      color: color.palette.neutral400
  }
})

const ROOT: ViewStyle = {
  paddingBottom: 100,
}
const SLIDER_CONTAINER: ViewStyle = {
  height: perfectSize(355),
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
  position: 'absolute',
  top: perfectSize(260)
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
const SEARCH_CONTAINER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: color.palette.white,
  alignSelf: "center",
  height: perfectSize(64),
  borderRadius: perfectSize(32),
  marginHorizontal: perfectSize(24),
  paddingHorizontal: perfectSize(24),
  position: "absolute",
  top: perfectSize(280)
}
const SEARCH_TEXT: TextStyle = {
  color: color.palette.neutral400,
  fontSize: perfectSize(18),
  lineHeight: perfectSize(24),
  marginLeft: perfectSize(16),
}
const TITLE_ROW_CONTAINER: ViewStyle = {
  marginTop: perfectSize(60),
  flexDirection: "row",
  justifyContent: "space-between",
}
const SECTION_TITLE: TextStyle = {
  marginTop: perfectSize(30),
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
const MORE_CONTAINER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginRight: perfectSize(20),
}
const SECTION_MORE: TextStyle = {
  color: color.palette.neutral400,
  marginRight: perfectSize(8),
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
const DESTINATION_FILTER_CONTAINER: ViewStyle = {
  marginTop: perfectSize(16),
  flexDirection: "row",
  marginLeft: perfectSize(24),
}
const DESTINATION_FILTER_ITEM: ViewStyle = {
  paddingHorizontal: perfectSize(14),
  paddingVertical: perfectSize(6),
  borderRadius: perfectSize(15),
}
const DESTINATION_FILTER_ITEM_SELECTED: ViewStyle = {
  backgroundColor: color.palette.primary500,
}
const DESTINATION_FILTER_ITEM_TEXT: TextStyle = {
  color: color.palette.neutral400,
}
const DESTINATION_FILTER_ITEM_TEXT_SELECTED: TextStyle = {
  color: color.palette.white,
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
const DESTINATION_ITEM: ViewStyle = {
  height: perfectSize(180),
  width: perfectSize(130),
  marginRight: perfectSize(8),
  borderRadius: perfectSize(5),
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "flex-end",
}
const DESTINATION_IMAGE: ImageStyle = {
  position: "absolute",
  height: "100%",
  width: "100%",
}
const DESTINATION_ITEM_TITLE: TextStyle = {
  color: color.palette.white,
  fontSize: perfectSize(18),
  lineHeight: perfectSize(24),
  marginBottom: perfectSize(16),
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