import React, { FC, useCallback, useEffect, useState } from "react"
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
import { Benefit, CollectionMetadata } from "../../types/generatedGql"

type PaginationMetadata = Omit<CollectionMetadata, 'limitValue'>

export const FavoritesScreen: FC<StackScreenProps<NavigatorParamList, "favorites">> = () => {
  const navigation = useNavigation()
  const renderItem = ({item}) => {
    return (
      <FavoriteBenefitItem value={item} removeFromFavorite={removeFromFavorite} />
    )
  }

  const [collection, setCollection] = useState<Benefit[]>([])
  const [metadata, setMetadata] = useState<PaginationMetadata>({
      totalCount: 0,
      totalPages: 0,
      currentPage: 1,
  })

  const handleFetchMoreCompleted = () => {
    if (data) {
        const { getUserFavoriteBenefits } = data
        collection.push(...getUserFavoriteBenefits.collection)
        setCollection(collection)
        setMetadata(getUserFavoriteBenefits.metadata)
    }
  }

  const [getUserFavoriteBenefits, {data, loading, error}] = useLazyQuery(GET_USER_FAVORITE_BENEFITS, {
    onCompleted: handleFetchMoreCompleted,
    fetchPolicy: 'network-only',
  })

  const fetchBenefits = useCallback(
    (page: number) => {
        if (page === 1) {
          setCollection([])
        }
        getUserFavoriteBenefits({
            variables: {
                limit: 10,
                page: page || 1
            },
        })
    },
    [getUserFavoriteBenefits]
)

  useEffect(() => {
    setCollection([])
    fetchBenefits(1)
}, [fetchBenefits])

const fetchMoreBenefits = useCallback(async () => {
  if (!error && !loading) {
    const currentPage = metadata?.currentPage || 0
    fetchBenefits(currentPage + 1)
  }
}, [error, loading, fetchBenefits, metadata?.currentPage])

  const removeFromFavorite = (slug) => {
    const arr = [...collection]
    const removeIndex = collection.map(item => item.slug).indexOf(slug)
    if (removeIndex !== -1) {
      arr.splice(removeIndex, 1);
      setCollection(arr)
    }
  }

  const ListHeaderComponent = () => {
    return (
      <>
        {collection?.length === 0 ? (
            <Button 
            text={'Go To Explore'} 
            onPress={() => navigation.navigate(EXPLORE_TAB)} 
          />
        ) : null}
      </>
    )
  }

  const onEndReached = () => {
    if (collection.length < metadata.totalCount) {
      fetchMoreBenefits()
    }
  }
  
  return (
    <Screen style={styles.container} preset="fixed" unsafe>
      <ScreenHeader title={'Favorites'} />
      <View style={styles.header}>
        <Text style={styles.sectionTitle} text={"Your Favorite Benefits"}/>
      </View>
      
      <FlatList 
        data={configBenefitsForPreview(collection)}
        renderItem={renderItem}
        contentContainerStyle={{paddingHorizontal: perfectSize(24)}}
        keyExtractor={item => item.slug}
        ListHeaderComponent={ListHeaderComponent}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => {
              fetchBenefits(1)
            }}
            tintColor={color.palette.primary500}
          />
        }
      />
      
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
})