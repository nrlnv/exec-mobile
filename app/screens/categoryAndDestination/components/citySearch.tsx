import React, { useEffect, useState } from 'react'
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native'
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
                <View style={[styles.searchResult, hideStyle as StyleProp<ViewStyle>, style]}>
                    {searchResult.map(res => (
                        <Text text={res.name} key={res.slug} style={styles.resultText} onPress={() => onCityPress(res.name)} />
                    ))}
                </View>
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
        minHeight: perfectSize(24),
    },
    searchResult: {
        width: '100%',
        borderWidth: 1,
        borderColor: color.palette.neutral400,
        borderRadius: 5,
        padding: perfectSize(10),
        backgroundColor: color.palette.white,
    },
    resultText: {
        color: color.palette.black
    }
})