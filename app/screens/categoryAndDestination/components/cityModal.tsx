import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Modal from 'react-native-modal'
import { FILTER_MODAL } from '../../../../assets/images';
import { Wallpaper } from '../../../components';
import { useAppSelector } from '../../../hooks/hooks';
import { selectCities } from '../../../services/redux/slices/citiesSlice';
import { color } from '../../../theme';
import { destinationsConst } from '../../../utils/constants';
import { perfectSize } from '../../../utils/dimmesion';
import { CityItem } from '../../category/components/cityItem';
import { DestinationsItem } from '../../category/components/destinationsItem';
import { ModalHeader } from '../../history/components/modalHeader';
import { CitySearch } from './citySearch';

export const CityModal = (props) => {
    const {isVisible, onBackdropPress, onCityPress} = props
    const [currentDestination, setCurrentDestination] = useState(0)

    const allCities = useAppSelector(selectCities)
    const featuredCities = allCities.filter(city => city.featured === true)
    const americaCities = allCities.filter(city => city.region === 'North America')
    const europeCities = allCities.filter(city => city.region === 'Europe & Middle East')
    const asiaCities = allCities.filter(city => city.region === 'Asia Pacific & Australia')
    const currentCities = currentDestination === 0 ? featuredCities 
        : currentDestination === 1 ?  americaCities
        : currentDestination === 2 ? europeCities : asiaCities

    const renderItem = ({item}) => {
        return (
            <CityItem city={item} onCityPress={onCityPress} style={styles.cityStyle} />
        )
    }

    const ListHeaderComponent = () => {
        return (
            <>
                <View style={styles.destinationsView}>
                    {
                        destinationsConst.map((destination) => (
                            <DestinationsItem
                                item={destination} 
                                currentId={currentDestination} 
                                onPress={setCurrentDestination}
                                key={destination.id}
                                itemColor={color.palette.neutral200}
                                textColor={color.palette.black}
                            />
                        ))
                    }
                </View>
                <CitySearch onCityPress={onCityPress} />
            </>
        )
    }



    return (
        <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
            <View style={styles.container}>
                <Wallpaper backgroundImage={FILTER_MODAL} />
                <ModalHeader text={'Choose Destination'} onBackdropPress={onBackdropPress}/>
                <ListHeaderComponent />
                <FlatList 
                    data={currentCities}
                    keyExtractor={item => item.slug}
                    numColumns={2}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{marginTop: perfectSize(20)}}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1,
        position: 'absolute',
        left: -20,
        right: -20,
        bottom: -20,
        paddingHorizontal: perfectSize(24),
        paddingVertical: perfectSize(35),
        height: '80%',
    },
    destinationsView: {
        flexDirection: 'row',
        marginBottom: perfectSize(20)
    },
    cityStyle: {
        width: perfectSize(160),
        height: perfectSize(140),
        marginBottom: perfectSize(20)
    },
})