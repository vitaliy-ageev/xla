import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface GeneralState {
    isScroll: number;
}

const initialState: GeneralState = {
    isScroll: 0,
}

export const generalSlice = createSlice({
    name: 'GeneralState',
    initialState,
    reducers: {
        setScroll(state, action: PayloadAction<number>) {
            state.isScroll = action.payload
        }
    }
})

export default generalSlice.reducer;