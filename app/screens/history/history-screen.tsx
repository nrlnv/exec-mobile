import React, { FC, useCallback, useEffect, useState } from "react"
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from "react-native"
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
import { timeConst } from "../../utils/constants"

const timeHandler = (id: number) => {
  switch (id) {
    case 1:
      return 'last_year'
    case 2:
      return 'all'
    default:
      return 'this_year';
  }
}

export const HistoryScreen: FC<StackScreenProps<NavigatorParamList, "history">> = () => {

  const [collection, setCollection] = useState<Redemption[]>([])
  const [metadata, setMetadata] = useState<Partial<CollectionMetadata>>({
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
  })
  const [isFetching, setIsFetching] = useState(false)
  const [time, setTime] = useState(0)

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
          period: timeHandler(time)
        },
      })
    },
    [getRedemptions, time]
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
      </View>
      <ActivityIndicator animating={loading} color={color.palette.primary500} />
      {!loading && collection.length === 0 && <Text text={'No benefits found'} style={styles.notFoundText} />}
      {
        !!metadata?.totalCount && (
          <FlatList
            data={collection}
            renderItem={renderItem}
            refreshing={isFetching}
            onEndReachedThreshold={0.5}
            onEndReached={onEndReached}
            keyExtractor={item => item.createdAt}
            contentContainerStyle={{paddingHorizontal: perfectSize(24)}}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => {
                  fetchRedemptions(1)
                }}
                tintColor={color.palette.primary500}
              />
            }
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
   notFoundText: {
    marginLeft: perfectSize(24)
  }
})