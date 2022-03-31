import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Modal from 'react-native-modal'
import { FILTER_MODAL } from '../../../../assets/images';
import { Text, Wallpaper } from '../../../components';
import { color } from '../../../theme';
import { destinationsConst } from '../../../utils/constants';
import { perfectSize } from '../../../utils/dimmesion';
import { CityItem } from '../../category/components/cityItem';
import { DestinationsItem } from '../../category/components/destinationsItem';
import { ModalHeader } from '../../history/components/modalHeader';

const cities = [
    {
        id: 0,
        text: 'Chicago',
    },
    {
        id: 1,
        text: 'New York',
    },
    {
        id: 2,
        text: 'Paris',
    },
    {
        id: 3,
        text: 'Tokyo',
    },
    {
        id: 4,
        text: 'Warsaw',
    },
    {
        id: 5,
        text: 'Berlin',
    },
    {
        id: 6,
        text: 'Hong Kong',
    },
]

export const CityModal = (props) => {
    const {isVisible, onBackdropPress, onCityPress} = props
    const [currentDestination, setCurrentDestination] = useState(0)

    const renderItem = ({item}) => {
        return (
            <CityItem text={item.text} onPress={() => onCityPress(item.text)} style={styles.cityStyle} />
        )
    }

    return (
        <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
            <View style={styles.container}>
                <Wallpaper backgroundImage={FILTER_MODAL} />
                <ModalHeader text={'Choose Destination'} onBackdropPress={onBackdropPress}/>
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
                <FlatList 
                    data={cities}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
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
        maxHeight: '80%',
    },
    destinationsView: {
        flexDirection: 'row',
        marginBottom: perfectSize(20)
    },
    cityStyle: {
        width: perfectSize(160),
        height: perfectSize(140),
        marginBottom: perfectSize(20)
    }
})