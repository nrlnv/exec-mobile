import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export interface CityState { 
    cities: any
}

const initialState: CityState = {
    cities: [],
}

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        setCities: (state, {payload}) => {
            state.cities = payload
        },
    },
})

export const {setCities} = citiesSlice.actions
export const selectCities = (state: RootState) => state.cities.cities
export default citiesSlice.reducer
