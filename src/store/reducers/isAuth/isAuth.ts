import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    isAuth: boolean;
}

const initialState: AuthState = {
    isAuth: false
}

export const authReducer = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        auth(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        }
    }
})

export default authReducer.reducer;