import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface adminState {
    adminAuth: boolean,
    name: string | null,
    token: string | null 
}

const initialState: adminState = {
    adminAuth: false,
    name: null,
    token: null,
}

export const adminSlice = createSlice({
    name: 'AdminSlice',
    initialState,
    reducers: {
        setAdminAuth(state, action: PayloadAction<boolean>) {
            state.adminAuth = action.payload;
        },
    }
})

export default adminSlice.reducer;