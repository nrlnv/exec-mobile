import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import request from "graphql-request";
import { LOGIN_MUTATION } from "../../../screens";
import { BASE_URL, graphqlAPI } from "../../api";

import type { RootState } from "../store";

export interface AuthState { 
    credentials: any
}

const initialState: AuthState = {
    credentials: {}
}

export const loginUserAsync = createAsyncThunk('auth/login', async (variables) => {
    let res = {}
    try {
        res = await request(BASE_URL, LOGIN_MUTATION, variables)
        console.log('thunk result', JSON.stringify(res))
    } catch (error) {
        console.log('error: ', error)
    }
    return res
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, {payload}) => {
            state.credentials = payload
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUserAsync.pending, (state) => {
            console.log('pending state', state);
        })
        builder.addCase(loginUserAsync.fulfilled, (state) => {
            console.log('fulfilled state', state);
        })
        builder.addCase(loginUserAsync.rejected, (state) => {
            console.log('rejected state', state);
        })
    }
})

export const {setToken} = authSlice.actions
export const selectToken = (state: RootState) => state.auth.credentials.accessToken
export default authSlice.reducer
