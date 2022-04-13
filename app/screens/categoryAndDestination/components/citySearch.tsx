import React, { useEffect, useState } from 'react'
import { Image, Pressable, ScrollView, StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native'
import { ARROW_RIGHT } from '../../../../assets/images'
import Marker from '../../../../assets/svgs/marker'
import Search from '../../../../assets/svgs/search'
import { Text } from '../../../components'
import { useAppSelector } from '../../../hooks/hooks'
import { selectCities } from '../../../services/redux/slices/citiesSlice'
import { color } from '../../../theme'
import { perfectSize } from '../../../utils/dimmesion'

export const CitySearch = (props) => {
    const {onCityPress, style} = props
    const allCities = useAppSelector(selectCities)
    const [value, setValue] = useState('')
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        if (value.length > 1) {
            const cities = allCities.filter(city => city.name.includes(value))
            setSearchResult(cities)
        } else if (value.length === 0) {
            setSearchResult([])
        }
    }, [value])

    const hideStyle = {display: searchResult.length === 0 ? 'none' : 'flex'}

    return (
        <>
            <View style={[styles.searchInput, style]}>
                    <Search />
                    <TextInput
                        value={value}
                        onChangeText={setValue}
                        placeholder='Where would you like to go?' 
                        placeholderTextColor={color.palette.neutral400}
                        // returnKeyType='search'
                        style={styles.input}
                        // autoFocus
                        autoCorrect={false}
                    />
                </View>
                <ScrollView style={[styles.searchResult, hideStyle as StyleProp<ViewStyle>, style]}>
                    {searchResult.map(res => (
                        <Pressable key={res.slug} style={styles.cityView} onPress={() => onCityPress(res.name)}>
                            <View style={styles.flexD}>
                                <Marker />
                                <Text text={res.name} style={styles.resultText} />
                            </View>
                            <Image source={ARROW_RIGHT} style={styles.icon} />
                        </Pressable>
                    ))}
                </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    searchInput: {
        borderRadius: 66,
        backgroundColor: color.palette.white,
        paddingHorizontal: perfectSize(24),
        paddingVertical: perfectSize(20),
        alignItems: 'center',
        flexDirection: 'row',
        // marginLeft: perfectSize(24),
        height: perfectSize(64),
        flex: 1,
        borderWidth: 1,
        borderColor: '#FAFAFA',
        marginBottom: perfectSize(5),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,  
        elevation: 2,
    },
    input: {
        fontSize: 18,
        lineHeight: 23.5,
        color: color.palette.black,
        marginLeft: perfectSize(16),
        flex: 1,
        // minHeight: perfectSize(24),
        height: perfectSize(64),
    },
    searchResult: {
        // width: '100%',
        // borderWidth: 1,
        // borderColor: color.palette.neutral400,
        borderRadius: 5,
        padding: perfectSize(10),
        backgroundColor: color.palette.white,
    },
    resultText: {
        color: color.palette.black,
        marginLeft: perfectSize(16),
        fontSize: 18
    },
    cityView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: perfectSize(10),
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
    },
    icon: {
        width: perfectSize(40),
        height: perfectSize(40),
    },
    flexD: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})