import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface adminState {
    adminAuth: boolean,
}

const initialState: adminState = {
    adminAuth: false,
}

export const adminSlice = createSlice({
    name: 'AdminSlice',
    initialState,
    reducers: {
        login(state) {
            state.adminAuth = true;
        },
        logout(state) {
            state.adminAuth = false;
        }
    }
})

export default adminSlice.reducer;