import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DESTINATION_HEADER, FILTER } from '../../../assets/images'
import { Avatar, Header, Screen, Text, Wallpaper } from '../../components'
import { color } from '../../theme'
import { perfectSize } from '../../utils/dimmesion'
import Marker from '../../../assets/svgs/marker'
import { SearchView } from '../explore/components/searchView'
import {filtersConst} from '../../utils/constants'
import { CategoryItem } from '../explore/components/category-item'
import Hotel from '../../../assets/svgs/hotel'
import Lifestyle from '../../../assets/svgs/lifestyle'
import Travel from '../../../assets/svgs/travel'
import Restaurant from '../../../assets/svgs/restaurant'
import ArrowRightBig from '../../../assets/svgs/arrow_right_big'
import { DestinationsItem } from '../category/components/destinationsItem'
import { FilterModal } from '../history/components/filterModal'
import { Benefit, CollectionMetadata, Order } from '../../types/generatedGql'
import { useLazyQuery } from '@apollo/client'
import { GET_BENEFITS } from '../../services/api/queries'
import { CategoryBenefitItem } from '../category/components/categoryBenefitItem'

type PaginationMetadata = Omit<CollectionMetadata, 'limitValue'>


const categoriesConst = [
    {
        id: 0,
        text: 'Hotels',
        icon: <Hotel color={color.palette.white} />
    },
    {
        id: 1,
        text: 'Lifestyle',
        icon: <Lifestyle color={color.palette.white} />
    },
    {
        id: 2,
        text: 'Travel',
        icon: <Travel color={color.palette.white} />
    },
    {
        id: 3,
        text: 'Experiences',
        icon: <Hotel color={color.palette.white} />
    },
    {
        id: 4,
        text: 'Restaurants',
        icon: <Restaurant color={color.palette.white} />
    },
    {
        id: 5,
        text: 'View All',
        icon: <ArrowRightBig color={color.palette.white} />
    },
]

export const DestinationScreen = () => {
    const route = useRoute()
    const {destination} = route?.params
    const insets = useSafeAreaInsets()
    const insetStyle = { marginTop: insets.top }
    const navigation = useNavigation()

    const [sort1, setSort1] = useState(0)
    const [sort2, setSort2] = useState(0)
    const [filterCategories, setFilterCategories] = useState([])
    const [showFilterModal, setShowFilterModal] = useState(false)
    const [currentFilter, setCurrentFilter] = useState(0)
    const toggleFilterModal = () => {
        setShowFilterModal(prevState => !prevState)
      }

    const renderItem = ({item}) => {
        return (
            <CategoryItem
                title={item.text}
                icon={item.icon}
                onPress={() => {}}
                style={{marginRight: item.id % 3 === 2 ? 0 : perfectSize(4), maxWidth: perfectSize(106), marginBottom: perfectSize(4)}}
            />
        )
    }

    const renderBenefitItem = ({item}) => {
        return (
            <CategoryBenefitItem value={item} />
        )
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
            city: destination,
            order: sortOrder,
            },
        })
        },
        [destination, getBenefits]
    )

    useEffect(() => {
        setCollection([])
        fetchBenefits(1)
    }, [fetchBenefits, destination])

    const fetchMoreBenefits = useCallback(async () => {
        if (!error && !isFetching) {
        fetchBenefits(metadata.currentPage + 1)
        }
    }, [error, isFetching, fetchBenefits, metadata.currentPage])

    const ListHeaderComponent = () => {
        return (
            <>
                <View style={styles.header}>
                    <Wallpaper backgroundImage={DESTINATION_HEADER} />
                    <View style={[styles.headerBack, insetStyle]} >
                        <Header leftIcon='back' headerText='Explore' onLeftPress={navigation.goBack} style={{marginLeft: perfectSize(8)}} />
                        <View style={styles.avatar}>
                            <Avatar image={"https://i.pravatar.cc/300"}/>
                        </View>
                    </View>
                    <View style={styles.categoryTitle}>
                        <Marker />
                        <TouchableOpacity style={styles.titleView} onPress={() => {}} >
                            <Text text={destination} style={styles.categoryTitleText} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.categoryDescription}>
                        <Text text={'Explore the StayEXEC Hotels & Resorts program and enjoy special offers as an EXEC Member'} style={styles.descriptionText} />
                    </View>
                </View>
                <SearchView text={'What would you like to do?'} />
                <Text style={styles.sectionTitle} text={"Browse by Category"}/>
                <View style={styles.categoriesView}>
                    <FlatList
                        data={categoriesConst}
                        numColumns={3}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Text style={styles.sectionTitle} text={`${destination} Area Benefits`}/>
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
                renderItem={renderBenefitItem}
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
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'yellow'
        backgroundColor: color.palette.black,
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
    categoriesView: {
        marginHorizontal: perfectSize(24), 
        marginTop: perfectSize(20), 
        marginBottom: perfectSize(60)
    }
})