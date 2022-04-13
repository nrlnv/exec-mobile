import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Screen, Text, Wallpaper } from '../../components';
import { color } from '../../theme';
import { CARET_DOWN, CATEGORY_HEADER, FILTER } from '../../../assets/images';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { perfectSize } from '../../utils/dimmesion';
import Hotel from '../../../assets/svgs/hotel';
import { destinationsConst, filtersConst } from '../../utils/constants';
import { DestinationsItem } from './components/destinationsItem';
import { CityItem } from './components/cityItem';
import { Benefit, CollectionMetadata, Order } from '../../types/generatedGql';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_BENEFITS } from '../../services/api/queries';
import { CategoryBenefitItem } from './components/categoryBenefitItem';
import { FilterModal } from '../history/components/filterModal';
import { ChooseCategoryModal } from './components/chooseCategoryModal';
import { SearchView } from '../explore/components/searchView';
import { CATEGORY_AND_DESTINATION_SCREEN } from '../../navigators/screen-name-constants';
import Lifestyle from '../../../assets/svgs/lifestyle';
import Travel from '../../../assets/svgs/travel';
import Experiences from '../../../assets/svgs/experiences';
import ArrowRightBig from '../../../assets/svgs/arrow_right_big';
import { HeaderwithAvatar } from './components/headerWithAvatar';
import Business from '../../../assets/svgs/business';
import { RootStackParamList } from '../../types';
import { useAppSelector } from '../../hooks/hooks';
import { selectCities } from '../../services/redux/slices/citiesSlice';
import { CitySearch } from '../categoryAndDestination/components/citySearch';

type PaginationMetadata = Omit<CollectionMetadata, 'limitValue'>

export const titleIcon = (category: string) => {
    switch (category) {
        case 'Hotels':
            return <Hotel width={26} height={30} />
        case 'Lifestyle':
            return <Lifestyle width={26} height={30} />
        case 'Travel':
            return <Travel width={26} height={30} />
        case 'Experiences':
            return <Experiences width={26} height={30} />
        case 'Business':
            return <Business width={26} height={30} />
        case 'View All':
            return <ArrowRightBig width={26} height={30} />
        default:
            return <Hotel width={26} height={30} />;
    }
}

export const filterHandler = (id: number) => {
    switch (id) {
        case 1:
            return 'popular'
        case 2:
            return 'featured'
        default:
            return null;
    }
}
  
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'CategoryScreen'>;

export const CategoryScreen = () => {
    const route = useRoute<ProfileScreenRouteProp>()
    const { category } = route?.params
    const navigation = useNavigation()
    const [currentDestination, setCurrentDestination] = useState(0)
    const [currentFilter, setCurrentFilter] = useState(0)

    const allCities = useAppSelector(selectCities)
    const featuredCities = allCities.filter(city => city.featured === true)
    const americaCities = allCities.filter(city => city.region === 'North America')
    const europeCities = allCities.filter(city => city.region === 'Europe & Middle East')
    const asiaCities = allCities.filter(city => city.region === 'Asia Pacific & Australia')
    const currentCities = currentDestination === 0 ? featuredCities 
        : currentDestination === 1 ?  americaCities
        : currentDestination === 2 ? europeCities : asiaCities

    // const [sort1, setSort1] = useState(0)
    // const [sort2, setSort2] = useState(0)
    // const [filterCategories, setFilterCategories] = useState([])
    // const [showFilterModal, setShowFilterModal] = useState(false)
    // const toggleFilterModal = () => setShowFilterModal(prevState => !prevState)

    const [showCategoryModal, setShowCategoryModal] = useState(false)
    const toggleCategoryModal = () => {
        setShowCategoryModal(prevState => !prevState)
    }

    const onChangeCategory = (category: string) => {
        navigation.setParams({category})
        toggleCategoryModal()
    }

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

    const [getBenefits, { data, loading, error }] = useLazyQuery(GET_BENEFITS, {
        onCompleted: handleFetchMoreCompleted,
        fetchPolicy: 'cache-and-network',
    })

    const fetchBenefits = useCallback(
        (page: number) => {
            setIsFetching(true)
            getBenefits({
                variables: {
                    page: page || 1,
                    category: category === 'All Benefits' ? null : category.toLowerCase(),
                    order: sortOrder,
                    scope: filterHandler(currentFilter)
                },
            })
        },
        [category, getBenefits, currentFilter]
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

    const onCityPress = (destination: string) => {
        navigation.navigate(CATEGORY_AND_DESTINATION_SCREEN, {category, destination})
    }

    const ListHeaderComponent = () => {
        return (
            <>
                <View style={styles.header}>
                    <Wallpaper backgroundImage={CATEGORY_HEADER} />
                    <HeaderwithAvatar headerText='Explore' />
                    <View style={styles.categoryTitle}>
                        {titleIcon(category)}
                        <TouchableOpacity style={styles.titleView} onPress={toggleCategoryModal} >
                            <Text text={category} style={styles.categoryTitleText} />
                            <Image source={CARET_DOWN} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.categoryDescription}>
                        <Text text={'Explore the StayEXEC Hotels & Resorts program and enjoy special offers as an EXEC Member'} style={styles.descriptionText} />
                    </View>
                </View>
                {category === 'Hotels' ? (
                    <>
                        <CitySearch style={{marginHorizontal: perfectSize(24)}} onCityPress={onCityPress} />
                        <Text style={[styles.sectionTitle, {marginTop: perfectSize(20)}]} text={"Browse by Destination"}/>
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
                        <View>
                            <ScrollView 
                                horizontal
                                showsHorizontalScrollIndicator={false} 
                                contentContainerStyle={styles.citiesView}
                            >
                                {currentCities.map(city => (
                                    <CityItem key={city.slug} city={city} onCityPress={onCityPress} />
                                ))}
                            </ScrollView>
                        </View>
                    </>
                ) : (<SearchView text={"Search for cities or benefits"} />)}
                <Text style={styles.sectionTitle} text={`${category} Benefits`}/>
                <View style={styles.filterView}>
                    {
                    filtersConst.map(t => (
                        <DestinationsItem item={t} key={t.id} currentId={currentFilter} onPress={setCurrentFilter} />
                    ))
                    }
                    {/* <TouchableOpacity onPress={toggleFilterModal} >
                        <Image source={FILTER} style={styles.filterIcon} />
                    </TouchableOpacity> */}
                </View>
                <ActivityIndicator animating={loading} color={color.palette.primary500} />
                {!loading && collection.length === 0 && <Text text={'no benefits found'} style={styles.notFoundText} />}
            </>
        )
    }

    return (
        <Screen style={styles.container} unsafe >
            <FlatList
                data={collection}
                renderItem={renderItem}
                refreshing={isFetching}
                onEndReachedThreshold={0.5}
                onEndReached={fetchMoreBenefits}
                keyExtractor={item => item.id}
                ListHeaderComponent={ListHeaderComponent}
                nestedScrollEnabled
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
            <ChooseCategoryModal 
                isVisible={showCategoryModal} 
                onBackdropPress={toggleCategoryModal} 
                onChangeCategory={onChangeCategory}    
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
        marginRight: perfectSize(17)
    },
    titleView: {
        marginLeft: perfectSize(18),
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: perfectSize(8),
        height: perfectSize(5),
    },
    categoryDescription: {
        marginTop: perfectSize(14),
        paddingHorizontal: perfectSize(24),
    },
    descriptionText: {
        fontSize: 16,
        lineHeight: 24,
    },
    sectionTitle: {
        marginLeft: perfectSize(24),
        fontSize: perfectSize(20),
        lineHeight: perfectSize(26),
        color: color.palette.white,
    },
    destinationsView: {
        marginTop: perfectSize(16),
        flexDirection: 'row',
        marginLeft: perfectSize(24),
    },
    citiesView: {
        flexDirection: 'row',
        marginTop: perfectSize(20),
        marginLeft: perfectSize(24),
        marginBottom: perfectSize(60)
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
    },
    notFoundText: {
        marginLeft: perfectSize(24),
    },
})