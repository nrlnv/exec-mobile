import React, { FC, useCallback, useEffect, useState } from "react"
import { FlatList, StyleSheet, TouchableOpacity, View, Image } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"
import { color } from "../../theme"
import { perfectSize } from "../../utils/dimmesion"
import { CollectionMetadata, Redemption } from "../../types/generatedGql"
import { useLazyQuery } from "@apollo/client"
import { GET_USER_REDEMPTIONS } from "../../services/api/queries"
import { ScreenHeader } from "../../components/header/screenHeader"
import { HistoryBenefitItem } from "./components/historyBenefitItem"
import { TimeItem } from "./components/timeItem"
import { FILTER } from "../../../assets/images"
import { FilterModal } from "./components/filterModal"
import { timeConst } from "../../utils/constants"

export const HistoryScreen: FC<StackScreenProps<NavigatorParamList, "history">> = () => {

  const [collection, setCollection] = useState<Redemption[]>([])
  const [metadata, setMetadata] = useState<Partial<CollectionMetadata>>({
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
  })
  const [isFetching, setIsFetching] = useState(false)
  const [time, setTime] = useState(0)
  const [sort1, setSort1] = useState(0)
  const [sort2, setSort2] = useState(0)
  const [filterCategories, setFilterCategories] = useState([])
  const [showFilterModal, setShowFilterModal] = useState(false)

  const handleFetchMoreCompleted = () => {
    if (data) {
      const { getUserRedemptions } = data
      collection.push(...getUserRedemptions.collection)
      setCollection(collection)
      setMetadata(getUserRedemptions.metadata)
      setIsFetching(false)
    }
  }

  const [getRedemptions, { data, error, loading }] = useLazyQuery(GET_USER_REDEMPTIONS, {
    onCompleted: handleFetchMoreCompleted,
    fetchPolicy: 'network-only',
  })

  const fetchRedemptions = useCallback(
    (page: number) => {
      setIsFetching(true)
      getRedemptions({
        variables: {
          page: page || 1,
          limit: 10,
        },
      })
    },
    [getRedemptions]
  )

  useEffect(() => {
    setCollection([])
    fetchRedemptions(1)
  }, [fetchRedemptions])

  const fetchMoreRedemptions = useCallback(async () => {
    if (!error && !isFetching) {
      const currentPage = metadata?.currentPage || 0
      fetchRedemptions(currentPage + 1)
    }
  }, [error, fetchRedemptions, isFetching, metadata?.currentPage])

  const renderItem = ({item}) => {
    return (
      <HistoryBenefitItem value={item} />
    )
  }

  const onEndReached = () => {
    if (collection.length < metadata.totalCount) {
      fetchMoreRedemptions()
    }
  }

  const toggleFilterModal = () => {
    setShowFilterModal(prevState => !prevState)
  }

  return (
    <Screen style={styles.container} preset="fixed" unsafe>
      <ScreenHeader title={"History"} />

      <Text style={styles.sectionTitle} text={"Previous Redemptions"}/>
      <View style={styles.timeView}>
        {
          timeConst.map(t => (
            <TimeItem item={t} key={t.id} time={time} onPress={setTime} />
          ))
        }
        <TouchableOpacity onPress={toggleFilterModal} >
          <Image source={FILTER} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {
        !!metadata?.totalCount && (
          <FlatList
            data={collection}
            renderItem={renderItem}
            refreshing={isFetching}
            onEndReachedThreshold={0.5}
            onEndReached={onEndReached}
            keyExtractor={item => item.benefit.slug}
            contentContainerStyle={{paddingHorizontal: perfectSize(24)}}
          />
        )
      }
      <FilterModal 
        isVisible={showFilterModal} 
        onBackdropPress={toggleFilterModal} 
        sort1={sort1}
        onSort1Press={setSort1} 
        sort2={sort2}
        onSort2Press={setSort2}
        filterCategories={filterCategories}
        onCategoryPress={setFilterCategories}
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
    marginTop: perfectSize(30),
    marginLeft: perfectSize(24),
    marginBottom: perfectSize(25)
   },
   timeView: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     marginHorizontal: perfectSize(24),
     marginBottom: perfectSize(25)
   },
   icon: {
     width: perfectSize(40),
     height: perfectSize(40),
   }
})