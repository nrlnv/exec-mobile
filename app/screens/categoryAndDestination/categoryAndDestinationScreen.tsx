import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { DESTINATION_HEADER, FILTER } from '../../../assets/images';
import Marker from '../../../assets/svgs/marker';
import { Screen, Text, Wallpaper } from '../../components';
import { color } from '../../theme';
import { perfectSize } from '../../utils/dimmesion';
import { titleIcon } from '../category/categoryScreen';
import { HeaderwithAvatar } from '../category/components/headerWithAvatar';
import ArrowDown from '../../../assets/svgs/arrowDown'
import { filtersConst } from '../../utils/constants';
import { DestinationsItem } from '../category/components/destinationsItem';
import { FilterModal } from '../history/components/filterModal';
import { Benefit, CollectionMetadata, Order } from '../../types/generatedGql';
import { useLazyQuery } from '@apollo/client';
import { GET_BENEFITS } from '../../services/api/queries';
import { CategoryBenefitItem } from '../category/components/categoryBenefitItem';
import { CityModal } from './components/cityModal';

type PaginationMetadata = Omit<CollectionMetadata, 'limitValue'>

export const CategoryAndDestinationScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const {category, destination} = route?.params

    const [showCityModal, setShowCityModal] = useState(false)
    const toggleCityModal = () => setShowCityModal(prevState => !prevState)
    const onCityPress = (city: string) => {
        navigation.setParams({destination: city})
        toggleCityModal()
    }

    const [sort1, setSort1] = useState(0)
    const [sort2, setSort2] = useState(0)
    const [filterCategories, setFilterCategories] = useState([])
    const [currentFilter, setCurrentFilter] = useState(0)
    const [showFilterModal, setShowFilterModal] = useState(false)
    const toggleFilterModal = () => setShowFilterModal(prevState => !prevState)

    const [collection, setCollection] = useState<Benefit[]>([])
    const [metadata, setMetadata] = useState<PaginationMetadata>({
        totalCount: 0,
        totalPages: 0,
        currentPage: 1,
    })
    const [sortOrder, setSortOrder] = useState(Order.UpdatedAt)
    const [isFetching, setIsFetching] = useState(true)

    const handleFetchMoreCompleted = () => {
        if (data) {
            const { benefits } = data
            collection.push(...benefits.collection)
            setCollection(collection)
            setMetadata(benefits.metadata)
            setIsFetching(false)
        }
    }

    const [getBenefits, { data, error }] = useLazyQuery(GET_BENEFITS, {
        onCompleted: handleFetchMoreCompleted,
        fetchPolicy: 'cache-and-network',
    })

    const fetchBenefits = useCallback(
        (page: number) => {
        setIsFetching(true)
        getBenefits({
            variables: {
            page: page || 1,
            category: category.toLowerCase(),
            city: destination,
            order: sortOrder,
            },
        })
        },
        [category, destination, getBenefits]
    )

    useEffect(() => {
        setCollection([])
        fetchBenefits(1)
    }, [fetchBenefits, category])

    const fetchMoreBenefits = useCallback(async () => {
        if (!error && !isFetching) {
        fetchBenefits(metadata.currentPage + 1)
        }
    }, [error, isFetching, fetchBenefits, metadata.currentPage])

    const renderItem = ({item}) => {
        return (
            <CategoryBenefitItem value={item} />
        )
    }

    const ListHeaderComponent = () => {
        return (
            <>
                <View style={styles.header}>
                    <Wallpaper backgroundImage={DESTINATION_HEADER} />
                    <HeaderwithAvatar headerText="Back" />
                    <View style={styles.categoryTitle}>
                        {titleIcon(category)}
                        <Text text={category} style={styles.categoryTitleText} />  
                    </View>
                    <TouchableOpacity style={styles.cityView} onPress={toggleCityModal} >
                        <Marker width={10} height={17} color={color.palette.white} />
                        <Text text={destination} style={styles.cityText} />
                        <ArrowDown color={color.palette.white} width={13} height={7} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.sectionTitle} text={`${category} benefits in ${destination}`}/>
                <View style={styles.filterView}>
                    {
                    filtersConst.map(t => (
                        <DestinationsItem item={t} key={t.id} currentId={currentFilter} onPress={setCurrentFilter} />
                    ))
                    }
                    <TouchableOpacity onPress={toggleFilterModal} >
                        <Image source={FILTER} style={styles.filterIcon} />
                    </TouchableOpacity>
                </View>
            </>
        )
    }

    return (
        <Screen style={styles.container} unsafe>
            
            <FlatList
                data={collection}
                renderItem={renderItem}
                refreshing={isFetching}
                onEndReachedThreshold={0.5}
                onEndReached={fetchMoreBenefits}
                keyExtractor={item => item.id}
                ListHeaderComponent={ListHeaderComponent}
            />
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
            <CityModal isVisible={showCityModal} onBackdropPress={toggleCityModal} onCityPress={onCityPress} />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.palette.black,
        flex: 1
    },
    header: {
        minHeight: perfectSize(260),
    },
    categoryTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: perfectSize(24)
    },
    categoryTitleText: {
        fontSize: 32,
        lineHeight: 41.6,
        marginHorizontal: perfectSize(17),
    },
    cityView: {
        marginLeft: perfectSize(24),
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: perfectSize(8),
        paddingHorizontal: perfectSize(16),
        backgroundColor: color.palette.primary500,
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        borderRadius: 100,
        marginTop: perfectSize(22)
    },
    cityText: {
        fontSize: 18,
        lineHeight: 23.5,
        marginHorizontal: perfectSize(16)
    },
    sectionTitle: {
        marginLeft: perfectSize(24),
        fontSize: perfectSize(20),
        lineHeight: perfectSize(26),
        color: color.palette.white,
        marginTop: perfectSize(30)
    },
    filterView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: perfectSize(25),
        marginHorizontal: perfectSize(24)
    },
    filterIcon: {
        width: perfectSize(40),
        height: perfectSize(40),
    }
})