import React, { FC, useEffect, useState } from "react"
import { FlatList, StyleSheet, View, RefreshControl } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Button, Screen, Text } from "../../components"
import { color } from "../../theme"
import { ScreenHeader } from "../../components/header/screenHeader"
import { useLazyQuery } from "@apollo/client"
import { GET_USER_FAVORITE_BENEFITS } from "../../services/api/queries"
import { configBenefitsForPreview } from "../../utils/utils"
import { FavoriteBenefitItem } from "./components/favoriteBenefitItem"
import { perfectSize } from "../../utils/dimmesion"
import { useNavigation } from "@react-navigation/native"
import { EXPLORE_TAB } from "../../navigators/screen-name-constants"

export const FavoritesScreen: FC<StackScreenProps<NavigatorParamList, "favorites">> = () => {
  const navigation = useNavigation()

  const [userFavorites, setUserFavorites] = useState([])

  const [getUserFavoriteBenefits, {data: userFavoriteBenefitsData, loading}] = useLazyQuery(GET_USER_FAVORITE_BENEFITS)

  const renderItem = ({item}) => {
    return (
      <FavoriteBenefitItem value={item} removeFromFavorite={removeFromFavorite} />
    )
  }

  const fetchBenefits = async () => {
    try {
      await getUserFavoriteBenefits()
      setUserFavorites(userFavoriteBenefitsData?.getUserFavoriteBenefits?.collection)
    } catch (error) {
      console.log(error);
    }
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
      </View>
      {
        userFavorites?.length > 0 ? (
          <FlatList 
            data={configBenefitsForPreview(userFavorites)}
            renderItem={renderItem}
            contentContainerStyle={{paddingHorizontal: perfectSize(24)}}
            keyExtractor={item => item.slug}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={fetchBenefits}
                tintColor={color.palette.primary500}
              />
            }
          />
        ) : (
          <Button 
            text={'Go To Explore'} 
            onPress={() => navigation.navigate(EXPLORE_TAB)} 
            style={styles.button}  
          />
        )
      }
      
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
   button: {
    marginHorizontal: perfectSize(24),
   }
})