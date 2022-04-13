import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Screen, Text, Wallpaper } from '../../components';
import { color } from '../../theme';
import { CHEVRON_LEFT, HISTORY_HEADER } from '../../../assets/images';
import { perfectSize } from '../../utils/dimmesion';
import Search from '../../../assets/svgs/search';
import { Benefit, CollectionMetadata } from '../../types/generatedGql';
import {GET_SEARCH_RESULTS} from '../../services/api/queries'
import { useLazyQuery } from '@apollo/client'
import {CategoryBenefitItem} from '../category/components/categoryBenefitItem'
import { useNavigation } from '@react-navigation/native';
import { filtersConst } from '../../utils/constants';
import { DestinationsItem } from '../category/components/destinationsItem'

type PaginationMetadata = Omit<CollectionMetadata, 'limitValue'>

const initialPaginationMetadata = {
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
}

export const SearchScreen = () => {
    const navigation = useNavigation()
    const [currentFilter, setCurrentFilter] = useState(0)
    const [value, setValue] = useState('')
    const [isFetching, setIsFetching] = useState(true)
    const [paginationMetadata, setPaginationMetadata] = useState<PaginationMetadata>(initialPaginationMetadata)
    const [benefits, setBenefits] = useState<Benefit[]>([])

    const handleFetchMoreCompleted = () => {
        if (data?.getResultsBySearch) {
          const { getResultsBySearch } = data
          setBenefits((prevCollection) => [...prevCollection, ...getResultsBySearch.benefits.collection])
          setPaginationMetadata(getResultsBySearch.benefits.metadata)
          setIsFetching(false)
        }
      }
    
      const [getSearchResults, { data, error, loading }] = useLazyQuery(GET_SEARCH_RESULTS, {
        onCompleted: handleFetchMoreCompleted,
      })
    
      const fetchBenefits = useCallback(
        (page: number) => {
          setIsFetching(true)
          getSearchResults({ variables: { page, term: value, category: 'all' } })
        },
        [getSearchResults, value]
      )
    
      useEffect(() => {
        setBenefits([])
        setPaginationMetadata(initialPaginationMetadata)
        // fetchBenefits(1)
      }, [fetchBenefits])
    
      const fetchMoreBenefits = useCallback(async () => {
        if (!error && !isFetching) {
          fetchBenefits(paginationMetadata.currentPage + 1)
        }
      }, [error, fetchBenefits, isFetching, paginationMetadata.currentPage])

    const onSubmit = () => {
        fetchBenefits(1)
    }

    const renderItem = ({item}) => {
        return (
            <CategoryBenefitItem value={item} />
        )
    }

    return (
        <Screen style={styles.container} unsafe>
            <View style={styles.header}>
                <Wallpaper backgroundImage={HISTORY_HEADER} style={styles.headerImage} />
                <View style={styles.searchView}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image source={CHEVRON_LEFT} style={styles.icon} />
                    </TouchableOpacity>
                    <View style={styles.searchInput}>
                        <Search />
                        <TextInput
                            value={value}
                            onChangeText={setValue}
                            placeholder='Search for cities or benefits' 
                            placeholderTextColor={color.palette.neutral400}
                            onSubmitEditing={onSubmit}
                            returnKeyType='search'
                            style={styles.input}
                            autoFocus
                            autoCorrect={false}
                        />
                    </View>
                </View>
                <ActivityIndicator animating={loading} color={color.palette.primary500} style={styles.loader} />
            </View>
            {benefits.length > 0 && (
                <>
                    <Text style={styles.sectionTitle} text={"Benefits"}/>
                    {/* <View style={styles.filterView}>
                        {
                            filtersConst.map(t => (
                                <DestinationsItem item={t} key={t.id} currentId={currentFilter} onPress={setCurrentFilter} />
                            ))
                        }
                    </View> */}
                </>
            )}
            <FlatList 
                data={benefits}
                keyExtractor={item => item.slug}
                renderItem={renderItem}
                refreshing={isFetching}
                onEndReachedThreshold={0.5}
                onEndReached={fetchMoreBenefits}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.palette.black
    },
    header: {
        marginBottom: perfectSize(20)
    },
    headerImage: {
        width: '100%',
        height: perfectSize(128)
    },
    searchView: {
        marginTop: perfectSize(50),
        marginHorizontal: perfectSize(24),
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: perfectSize(11),
        height: perfectSize(18),
    },
    searchInput: {
        borderRadius: 66,
        backgroundColor: color.palette.white,
        paddingHorizontal: perfectSize(20),
        paddingVertical: perfectSize(20),
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: perfectSize(24),
        flex: 1,
        height: perfectSize(64)
    },
    input: {
        fontSize: 18,
        lineHeight: 23.5,
        color: color.palette.black,
        marginLeft: perfectSize(16),
        flex: 1,
        height: perfectSize(64)
    },
    sectionTitle: {
        marginLeft: perfectSize(24),
        fontSize: perfectSize(20),
        lineHeight: perfectSize(26),
        color: color.palette.white,
        marginVertical: perfectSize(30)
    },
    filterView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: perfectSize(25),
        marginHorizontal: perfectSize(24)
    },
    loader: {
        position: 'absolute',
        bottom: -50,
        alignSelf: 'center',
    }
})