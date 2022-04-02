import React, { FC, useEffect, useState } from "react"
import { FlatList, Image, StyleSheet, TouchableOpacity, View, RefreshControl } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"
import { color } from "../../theme"
import { ScreenHeader } from "../../components/header/screenHeader"
import { useLazyQuery, useQuery } from "@apollo/client"
import { GET_USER_FAVORITE_BENEFITS } from "../../services/api/queries"
import { configBenefitsForPreview } from "../../utils/utils"
import { FavoriteBenefitItem } from "./components/favoriteBenefitItem"
import { perfectSize } from "../../utils/dimmesion"
import { FILTER } from "../../../assets/images"
import { FilterModal } from "../history/components/filterModal"

export const FavoritesScreen: FC<StackScreenProps<NavigatorParamList, "favorites">> = () => {

  // const {
  //   data: userFavoriteBenefitsData,
  //   error,
  //   loading,
  // } = useQuery(GET_USER_FAVORITE_BENEFITS)

  const [userFavorites, setUserFavorites] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const [getUserFavoriteBenefits, {data: userFavoriteBenefitsData}] = useLazyQuery(GET_USER_FAVORITE_BENEFITS)

  // const userFavorites = userFavoriteBenefitsData?.getUserFavoriteBenefits?.collection

  const [sort1, setSort1] = useState(0)
  const [sort2, setSort2] = useState(0)
  const [filterCategories, setFilterCategories] = useState([])
  const [showFilterModal, setShowFilterModal] = useState(false)

  const renderItem = ({item}) => {
    return (
      <FavoriteBenefitItem value={item} removeFromFavorite={removeFromFavorite} />
    )
  }

  const toggleFilterModal = () => {
    setShowFilterModal(prevState => !prevState)
  }

  const fetchBenefits = async () => {
    setRefreshing(true)
    try {
      await getUserFavoriteBenefits()
      setUserFavorites(userFavoriteBenefitsData?.getUserFavoriteBenefits?.collection)
    } catch (error) {
      console.log(error);
    }
    setRefreshing(false)
  }

  useEffect(() => {
    fetchBenefits()
  }, [userFavoriteBenefitsData])

  const removeFromFavorite = (slug) => {
    const arr = [...userFavorites]
    const removeIndex = userFavorites.map(item => item.slug).indexOf(slug)
    if (removeIndex !== -1) {
      arr.splice(removeIndex, 1);
      setUserFavorites(arr)
    }
  }

  
  return (
    <Screen style={styles.container} preset="fixed" unsafe>
      <ScreenHeader title={'Favorites'} />
      <View style={styles.header}>
        <Text style={styles.sectionTitle} text={"Your Favorite Benefits"}/>
        {/* <TouchableOpacity onPress={toggleFilterModal} >
          <Image source={FILTER} style={styles.icon} />
        </TouchableOpacity> */}
      </View>

      <FlatList 
        data={configBenefitsForPreview(userFavorites)}
        renderItem={renderItem}
        contentContainerStyle={{paddingHorizontal: perfectSize(24)}}
        keyExtractor={item => item.slug}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetchBenefits}
            tintColor="#fff"
          />
        }
      />

      {/* <FilterModal 
        isVisible={showFilterModal} 
        onBackdropPress={toggleFilterModal} 
        sort1={sort1}
        onSort1Press={setSort1} 
        sort2={sort2}
        onSort2Press={setSort2}
        filterCategories={filterCategories}
        onCategoryPress={setFilterCategories}
      /> */}
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.palette.black,
    flex: 1,
  },
  sectionTitle: {
    fontSize: perfectSize(20),
    lineHeight: perfectSize(26),
    color: color.palette.white,
    marginVertical: perfectSize(30),
   },
   header: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     marginHorizontal: perfectSize(24)
   },
   icon: {
     width: perfectSize(40),
     height: perfectSize(40),
   }
})