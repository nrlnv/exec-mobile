import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export interface AuthState { 
    credentials: any
    user: any
}

const initialState: AuthState = {
    credentials: {},
    user: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, {payload}) => {
            state.credentials = payload
        },
        setUser: (state, {payload}) => {
            state.user = payload
        }
    },
})

export const {setToken, setUser} = authSlice.actions
export const selectCredentials = (state: RootState) => state.auth.credentials
export const selectToken = (state: RootState) => state.auth.credentials.accessToken
export const selectUser = (state: RootState) => state.auth.user
export default authSlice.reducer
