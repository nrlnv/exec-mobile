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
import { GET_POPULAR_BENEFITS, GET_BENEFITS_FOR_YOU, GET_CURRENT_USER, GET_HOMEPAGE_HERO_BENEFITS, GET_BENEFITS, GET_CITIES } from "../../services/api/queries"
import { configBenefitsForPreview } from "../../utils/utils"
import { destinationsConst } from "../../utils/constants"
import { CATEGORY_AND_DESTINATION_SCREEN, CATEGORY_SCREEN, DESTINATION_SCREEN } from "../../navigators/screen-name-constants"
import { useNavigation } from "@react-navigation/native"
import { DestinationsItem } from "../category/components/destinationsItem"
import { CityItem } from "../category/components/cityItem"
import { SearchView } from "./components/searchView"
import { setUser } from "../../services/redux/slices/authSlice"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import Business from "../../../assets/svgs/business"
import { BenefitsSlider } from "./components/benefitsSlider"
import { selectCities, setCities } from "../../services/redux/slices/citiesSlice"

export const ExploreScreen: FC<StackScreenProps<NavigatorParamList, "explore">> = () => {
  const dispatch = useAppDispatch()
  const [activeSlide, setActiveSlide] = useState(0)
  const insets = useSafeAreaInsets()
  const insetStyle = { marginTop: insets.top }
  const navigation = useNavigation()
  const [currentDestination, setCurrentDestination] = useState(0)

  const allCities = useAppSelector(selectCities)
  const featuredCities = allCities.filter(city => city.featured === true)
  const americaCities = allCities.filter(city => city.region === 'North America' || city.region === 'South America' || city.region === 'Canada' || city.region === 'Canada' || city.region === 'Caribbean')
  const europeCities = allCities.filter(city => city.region === 'Europe & Middle East' || city.region === 'Europe')
  const asiaCities = allCities.filter(city => city.region === 'Asia Pacific & Australia')
  const currentCities = currentDestination === 0 ? featuredCities 
    : currentDestination === 1 ?  americaCities
    : currentDestination === 2 ? europeCities : asiaCities

  const { data: popularBenefits } = useQuery(GET_POPULAR_BENEFITS)
  const { data: benefitsForYou } = useQuery(GET_BENEFITS_FOR_YOU)
  const { data: heroBenefitsData} = useQuery(GET_HOMEPAGE_HERO_BENEFITS)
  const { data: popularHotels} = useQuery(GET_BENEFITS, {variables: {
    category: 'hotels',
    scope: 'popular'
  }})
  const { data: popularLifestyle} = useQuery(GET_BENEFITS, {variables: {
    category: 'lifestyle',
    scope: 'popular'
  }})
  const { data: popularTravel} = useQuery(GET_BENEFITS, {variables: {
    category: 'travel',
    scope: 'popular'
  }})
  const { data: popularExperiences} = useQuery(GET_BENEFITS, {variables: {
    category: 'experiences',
    scope: 'popular'
  }})
  const { data: popularBusiness} = useQuery(GET_BENEFITS, {variables: {
    category: 'business',
    scope: 'popular'
  }})
  
  const [cities, { data: citiesData }] = useLazyQuery(GET_CITIES)

  const [getCurrentUser, { data: userData }] = useLazyQuery(GET_CURRENT_USER)

  const navigateToCategoryScreen = (category: string) => {
    navigation.navigate(CATEGORY_SCREEN, {category})
  }

  const onCityPress = (destination: string) => {
    navigation.navigate(CATEGORY_AND_DESTINATION_SCREEN, {category: 'Hotels', destination})
  }

  useEffect(() => {
    ;(async () => {
      try {
        await getCurrentUser()
        if (userData) {
          dispatch(setUser(userData?.currentUser))
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, [userData])

  useEffect(() => {
    ;(async () => {
      try {
        await cities()
        if (citiesData){
          dispatch(setCities(citiesData?.cities))
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, [citiesData])

  return (
    <Screen style={styles.container} preset="scroll" unsafe>
      <View style={styles.sliderContainer}>
        <PagerView
          style={{height: perfectSize(300)}}
          initialPage={0}
          onPageSelected={({ nativeEvent: { position } }) => {
            setActiveSlide(position)
          }}
        >
          {
            configBenefitsForPreview(heroBenefitsData?.getHomepageHeroBenefits?.collection).map((benefit, index) => (
              <View key={index} style={styles.slideContainer}>
                <SliderItem
                  benefit={benefit}
                />
              </View>
            ))
          }
        </PagerView>
        <View style={styles.pageIndicatorContainer}>
          {
            configBenefitsForPreview(heroBenefitsData?.getHomepageHeroBenefits?.collection).map((benefit, index) => (
              <View key={index} style={[styles.indicatorDot, activeSlide === index && styles.indicatorDotActive]}/>
            ))
          }
        </View>
      </View>
      <View style={[styles.avatar, insetStyle]}>
        <Avatar />
      </View>
      <SearchView text={"Search for cities or benefits"} />
      <Text style={SECTION_TITLE} text={"Browse by Category"}/>
      <View style={CATEGORIES_CONTAINER}>
        <CategoryItem
          title={"Hotels"}
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
          {currentCities.map(city => (
            <CityItem key={city.slug} city={city} onCityPress={onCityPress} />
          ))}
        </ScrollView>
      </View>
      <BenefitsSlider benefits={benefitsForYou?.getBenefitsForYou?.collection} text={'For You'} moreButton={false} />
      <BenefitsSlider benefits={popularBenefits?.getPopularBenefits?.collection} text={'Popular'} moreButton={false} />
      <BenefitsSlider 
        benefits={popularHotels?.benefits?.collection} 
        text={'Popular in Hotels'} 
        onMorePress={() => navigateToCategoryScreen('Hotels')}
        icon={<Hotel color={color.palette.white} />}
      />
      <BenefitsSlider 
        benefits={popularLifestyle?.benefits?.collection} 
        text={'Popular in Lifestyle'} 
        onMorePress={() => navigateToCategoryScreen('Lifestyle')}
        icon={<Lifestyle color={color.palette.white} />}
      />
      <BenefitsSlider 
        benefits={popularTravel?.benefits?.collection} 
        text={'Popular in Travel'} 
        onMorePress={() => navigateToCategoryScreen('Travel')}
        icon={<Travel color={color.palette.white} />}
      />
      <BenefitsSlider 
        benefits={popularExperiences?.benefits?.collection} 
        text={'Popular in Experiences'} 
        onMorePress={() => navigateToCategoryScreen('Experiences')}
        icon={<Experiences color={color.palette.white} />}
      />
      <BenefitsSlider 
        benefits={popularBusiness?.benefits?.collection} 
        text={'Popular in Business'} 
        onMorePress={() => navigateToCategoryScreen('Business')}
        icon={<Business color={color.palette.white} />}
      />

    </Screen>
  )
}

const styles = StyleSheet.create({
  destinationsView: {
    marginTop: perfectSize(16),
    flexDirection: 'row',
    marginLeft: perfectSize(24),
  },
  container: {
    paddingBottom: 100,
  },
  sliderContainer: {
    overflow: "hidden",
  },
  avatar: {
    position: "absolute",
    // top: 5,
    right: perfectSize(14),
  },
  pageIndicatorContainer: {
    flexDirection: "row",
    alignSelf: "center",
    top: -perfectSize(50)
  },
  indicatorDot: {
    backgroundColor: color.palette.white,
    height: perfectSize(6),
    width: perfectSize(6),
    marginHorizontal: perfectSize(9),
    borderRadius: perfectSize(3),
    opacity: 0.5,
  },
  indicatorDotActive: {
    opacity: 1,
  },
  slideContainer: {
    justifyContent: "center",
  },
})
const SECTION_TITLE: TextStyle = {
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
const DESTINATIONS_SCROLL_CONTAINER: ViewStyle = {
  paddingHorizontal: perfectSize(24),
}