import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Header, Screen, Text, Wallpaper } from '../../components';
import { color } from '../../theme';
import { CARET_DOWN, CATEGORY_HEADER, FILTER } from '../../../assets/images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { perfectSize } from '../../utils/dimmesion';
import Hotel from '../../../assets/svgs/hotel';
import Search from '../../../assets/svgs/search';
import { destinationsConst, filtersConst } from '../../utils/constants';
import { DestinationsItem } from './components/destinationsItem';
import { CityItem } from './components/cityItem';
import { Benefit, CollectionMetadata, Order } from '../../types/generatedGql';
import { useLazyQuery } from '@apollo/client';
import { GET_BENEFITS } from '../../services/api/queries';
import { CategoryBenefitItem } from './components/categoryBenefitItem';
import { FilterModal } from '../history/components/filterModal';
import { ChooseCategoryModal } from './components/chooseCategoryModal';

type PaginationMetadata = Omit<CollectionMetadata, 'limitValue'>


export const CategoryScreen = () => {
    const route = useRoute()
    const { category } = route?.params
    const insets = useSafeAreaInsets()
    const insetStyle = { marginTop: insets.top }
    const navigation = useNavigation()
    const [currentDestination, setCurrentDestination] = useState(0)
    const [currentFilter, setCurrentFilter] = useState(0)

    const [sort1, setSort1] = useState(0)
    const [sort2, setSort2] = useState(0)
    const [filterCategories, setFilterCategories] = useState([])
    const [showFilterModal, setShowFilterModal] = useState(false)
    const toggleFilterModal = () => {
        setShowFilterModal(prevState => !prevState)
      }

    const [showCategoryModal, setShowCategoryModal] = useState(false)
    const toggleCategoryModal = () => {
        setShowCategoryModal(prevState => !prevState)
    }

    const onChangeCategory = (category) => {
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
            order: sortOrder,
            },
        })
        },
        [category, getBenefits]
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
                    <Wallpaper backgroundImage={CATEGORY_HEADER} />
                    <View style={[styles.headerBack, insetStyle]} >
                        <Header leftIcon='back' headerText='Explore' onLeftPress={navigation.goBack} style={{marginLeft: perfectSize(8)}} />
                        <View style={styles.avatar}>
                            <Avatar image={"https://i.pravatar.cc/300"}/>
                        </View>
                    </View>
                    <View style={styles.categoryTitle}>
                        <Hotel width={26} height={30} />
                        <TouchableOpacity style={styles.titleView} onPress={toggleCategoryModal} >
                            <Text text={category} style={styles.categoryTitleText} />
                            <Image source={CARET_DOWN} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.categoryDescription}>
                        <Text text={'Explore the StayEXEC Hotels & Resorts program and enjoy special offers as an EXEC Member'} style={styles.descriptionText} />
                    </View>
                </View>
                <View style={styles.searchView}>
                    <Search/>
                    <Text style={styles.searchText} text={"Where do you want to go?"}/>
                </View>
                <Text style={styles.sectionTitle} text={"Browse by Destination"}/>
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
                        <CityItem text={'Oral'} />
                        <CityItem text={'Atyrau'} />
                        <CityItem text={'Aqtau'} />
                        <CityItem text={'Aqtobe'} />
                    </ScrollView>
                </View>
                <Text style={styles.sectionTitle} text={"Hotel Benefits"}/>
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
        <Screen style={styles.container} unsafe >
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
    headerBack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        position: "absolute",
        right: perfectSize(16),
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
        height: perfectSize(8),
    },
    categoryDescription: {
        marginTop: perfectSize(14),
        paddingHorizontal: perfectSize(24),
    },
    descriptionText: {
        fontSize: 16,
        lineHeight: 24,
    },
    searchView: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: color.palette.white,
        height: perfectSize(64),
        borderRadius: perfectSize(32),
        marginHorizontal: perfectSize(24),
        paddingHorizontal: perfectSize(24),
        top: -perfectSize(30)
    },
    searchText: {
        color: color.palette.neutral400,
        fontSize: perfectSize(18),
        lineHeight: perfectSize(24),
        marginLeft: perfectSize(16),
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
    }
})