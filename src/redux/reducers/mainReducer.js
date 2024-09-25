import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: '',
    user: {},
    books: {},
    users: {}
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAuthorizationToken: (state, action) => {
            state.token = action.payload
            window.location = '/home'
        },
    }
})

export const { setAuthorizationToken } = appSlice.actions
export default appSlice.reducer
